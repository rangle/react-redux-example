#!/bin/bash
# Use > 1 to consume two arguments per pass in the loop (e.g. each
# argument has a corresponding value to go with it).
# Use > 0 to consume one or more arguments per pass in the loop (e.g.
# some arguments don't have a corresponding value to go with it such
# as in the --default example).
# note: if this is set to > 0 the /etc/hosts part is not recognized ( may be a bug )
echo "Processing arguments:"
while [[ $# > 1 ]]
do
key="$1"

case $key in
    -tl|--test_location)
    test_location="$2"
    shift # past argument
    ;;
    -od|--output_dir)
    output_dir="--outputdir $2"
    shift # past argument
    ;;
    -tc|--test_cases)
    shift # past argument name
    test_cases=()
    for E in "${@}"; do
        test_cases+=("-t ${E}")
    done
    shift # past argument
    ;;
    -tv|--test_variables)
    shift # past argument name
    test_variables=()
    for E in "${@}"; do
        test_variables+=("-v ${E}")
    done
    shift # past argument
    ;;
    -it|--include_tags)
    include_tags="--include $2"
    shift # past argument
    ;;
    -et|--exclude_tags)
    exclude_tags="--exclude $2"
    shift # past argument
    ;;
    --default)
    test_location="tests"
    output_dir="results"
    test_cases=()
    test_variables=()
    include_tags=""
    exclude_tags=""
    ;;
    *)
    echo "unknown option $1"        # unknown option
    ;;
esac
shift # past argument or value
done
echo test_location  = "${test_location}"
echo output_dir     = "${output_dir}"
echo test_cases     = "${test_cases[@]}"
echo test_variables = "${test_variables[@]}"
echo include_tags   = "${include_tags}"
echo exclude_tags   = "${exclude_tags}"
echo "Running Robot Tests:"
robot $output_dir "${test_variables[@]}" $include_tags $exclude_tags "${test_cases[@]}" $test_location
