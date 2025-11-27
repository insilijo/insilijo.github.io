#!/bin/bash
set -euo pipefail

echo "Entry point script running"

CONFIG_FILE=_config.yml

# Function to manage Gemfile.lock
manage_gemfile_lock() {
    git config --global --add safe.directory '*'
    if command -v git &> /dev/null && [ -f Gemfile.lock ]; then
        if git ls-files --error-unmatch Gemfile.lock &> /dev/null; then
            echo "Gemfile.lock is tracked by git, keeping it intact"
            git restore Gemfile.lock 2>/dev/null || true
        else
            echo "Gemfile.lock is not tracked by git, removing it"
            rm Gemfile.lock
        fi
    fi
}

start_jekyll() {
    manage_gemfile_lock
    echo "Starting Jekyll with watch and livereload..."
    # Use --force_polling for better Windows Docker support
    bundle exec jekyll serve \
        --watch \
        --port=8080 \
        --host=0.0.0.0 \
        --livereload \
        --livereload-port=35729 \
        --verbose \
        --trace \
        --force_polling &
    JEKYLL_PID=$!
    echo "Jekyll started with PID: $JEKYLL_PID"
}

start_jekyll

# Watch for config file changes and restart Jekyll
while true; do
    inotifywait -q -e modify,move,create,delete $CONFIG_FILE 2>/dev/null || sleep 1
    if [ $? -eq 0 ]; then
        echo "Change detected to $CONFIG_FILE, restarting Jekyll"
        jekyll_pid=$(pgrep -f "jekyll serve" || echo "")
        if [ -n "$jekyll_pid" ]; then
            kill -KILL $jekyll_pid 2>/dev/null || true
            sleep 1
        fi
        start_jekyll
    fi
done
