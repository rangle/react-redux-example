#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_folder.bash

DIR="./e2e/robot"

test_location="$DIR/tests/stories/us1234"
output_dir="$DIR/results"

bash $DIR/exec/run_configurable.bash  --output_dir $output_dir --test_location $test_location
