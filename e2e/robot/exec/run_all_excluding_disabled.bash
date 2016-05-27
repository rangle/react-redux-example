#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_all.bash

DIR="./e2e/robot"

test_location="$DIR/tests"
output_dir="$DIR/results"

echo $test_location
echo $output_dir

bash $DIR/exec/run_configurable.bash --exclude_tags "Disabled" --output_dir $output_dir --test_location $test_location
