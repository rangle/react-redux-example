#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_with_variables.bash

test_variables=("LOGIN_URL:http://localhost:8080")

DIR="./e2e/robot"

test_location="$DIR/tests/stories/us1234"
output_dir="$DIR/results"

bash $DIR/exec/run_configurable.bash --test_location $test_location --output_dir $output_dir --test_variables "${test_variables[@]}"
