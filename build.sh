#!/bin/bash

set -e

npx nuxi generate

# CloudFlare Pages can not handle paths beginning with a dot for deployment
# (internal check for file existence fails)
mv .output output