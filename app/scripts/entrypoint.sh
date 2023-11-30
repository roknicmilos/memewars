#!/bin/bash

set -e

. /app/scripts/utils.sh

export NEXT_PUBLIC_API_URL="$API_BASE_URL/api"

if [ "$1" = "dev" ]; then
  printc "Installing packages...\n" "info"
  npm install
  printc "Starting DEVELOPMENT server...\n" "info"
  npm run dev

elif [ "$1" = "prod" ]; then
  printc "Starting PRODUCTION server...\n" "info"
  npm start

else
  printc "Unknown command: '$1'\n" "danger"
  printc "Exiting!\n" "danger"
  exit 1
fi
