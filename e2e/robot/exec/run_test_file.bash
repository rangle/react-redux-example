#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_test_file.bash

test_location="tests/stories/us1234/ac2_unable_to_login_with_invalid_credentials.robot"

DIR="./e2e/robot"

test_location="$DIR/tests/stories/us1234"
output_dir="$DIR/results"

bash $DIR/exec/run_configurable.bash --output_dir $output_dir --test_location $test_location
