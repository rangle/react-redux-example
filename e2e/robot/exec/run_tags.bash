#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_tags.bash


#this will run only tests with these tags
#include multiple tags by separating them with &
#"bug4321&us1234"
include_tags="Smoke"

#this will exclude tests with these tags
#include multiple tags by separating them with &
exclude_tags="us1234"

DIR="./e2e/robot"

test_location="$DIR/tests/stories/us1234"
output_dir="$DIR/results"

bash $DIR/exec/run_configurable.bash --output_dir $output_dir --include_tags $include_tags --exclude_tags $exclude_tags --test_location $test_location
