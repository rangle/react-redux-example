#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_all.bash

DIR="./e2e/robot"

test_location="$DIR/tests"
output_dir="$DIR/results"
test_variables=("BROWSER:Chrome" "LOGIN_URL:http://localhost:8080/")
include_tags="Smoke"
exclude_tags="Disabled"

bash $DIR/exec/run_configurable.bash  --exclude_tags $exclude_tags --include_tags $include_tags --output_dir $output_dir --test_location $test_location --test_variables "${test_variables[@]}"
