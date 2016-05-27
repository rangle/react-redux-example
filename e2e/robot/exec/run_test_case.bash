#!/bin/bash
#to run this file run the following command in a terminal from root folder
#bash exec/run_test_case.bash


#full test case name
#examples:
#all tests
#test_cases=()
#one test
#test_cases=("01 Able To Login With Valid Credentials")
#multiple tests
#test_cases=("01 Able To Login With Valid Credentials" "01 Verify Bug Is Fixed" "04 Password Must Not Have Spaces")
test_cases=("01 Able To Login With Valid Credentials")
#echo ${test_cases[@]}

DIR="./e2e/robot"

test_location="$DIR/tests/stories/us1234"
output_dir="$DIR/results"

bash $DIR/exec/run_configurable.bash --test_location $test_location --output_dir $output_dir --test_cases "${test_cases[@]}"
