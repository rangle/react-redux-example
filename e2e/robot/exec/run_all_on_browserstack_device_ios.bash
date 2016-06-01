#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_all.bash

DIR="./e2e/robot"

test_location="$DIR/tests"
output_dir="$DIR/results"
include_tags=""
exclude_tags="Disabled"
test_variables=("BROWSER:IE" "LOGIN_URL:http://localhost:8080/")
browserstack=()
browserstack+=("BROWSERSTACK.ENABLED:True")
browserstack+=("BROWSERSTACK.KEY:put_your_key_here")
browserstack+=("BROWSERSTACK.USERNAME:put_your_username_here")
browserstack+=("BROWSERSTACK.PLATFORM:MOBILE")
browserstack+=("BROWSERSTACK.DEVICE:iPhone 6")
browserstack+=("BROWSERSTACK.BRWOSER.NAME:ios")
browserstack+=("BROWSERSTACK.DEVICE.ORIENTATION:landscape")
bash $DIR/exec/run_configurable.bash  --exclude_tags $exclude_tags --include_tags $include_tags --output_dir $output_dir --test_location $test_location --browserstack "${browserstack[@]}" --test_variables "${test_variables[@]}"
