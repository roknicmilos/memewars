#!/bin/bash

set -e

. /app/scripts/utils.sh

export REACT_APP_APP_URL=$APP_BASE_URL
export REACT_APP_API_URL="$API_BASE_URL/api"

if [ "$1" = "dev" ]; then
  printc "Installing packages...\n" "info"
  npm install
  printc "Starting DEVELOPMENT server...\n" "info"
  npm start

elif [ "$1" = "prod" ]; then
  printc "Starting PRODUCTION server...\n" "info"
  serve -s build

else
  printc "Unknown command: '$1'\n" "danger"
  printc "Exiting!\n" "danger"
  exit 1
fi
