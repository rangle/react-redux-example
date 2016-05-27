#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_all.bash

test_location="tests"
output_dir="results"

bash exec/run_configurable.bash --output_dir $output_dir --test_location $test_location
