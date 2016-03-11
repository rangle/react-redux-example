*** Settings ***
Documentation     A test suite with a single test for valid login.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          ../resources/login_resource.robot
Test Teardown	  close all browsers

*** Test Cases ***
Valid Login
    Open Browser To Login Page
    Input Username    user
    Input Password    pass
    Click Login
    Verify user is successfully logged in



Username is empty - Invalid Login
	Open Browser To Login Page
    Input Password    Pass
    Click Login
    Verify Username Validation  Username is required.



Username is invalid - Invalid Login
	Open Browser To Login Page
    Input Username    invalid
    Input Password    pass
    Click Login
    Verify Alert Validation  Invalid username and password


Password is empty - Invalid Login
	Open Browser To Login Page
    Input Username    user
    Click Login
    Verify Password Validation  Password is required.

Password is invalid - Invalid Login
	Open Browser To Login Page
    Input Username    user
    Input Password    invalid
    Click Login
    Verify Alert Validation  Invalid username and password


Username and Password are Invalid - Invalid Login
	Open Browser To Login Page
    Input Username    invalid
    Input Password    invalid
    Click Login
    Verify Alert Validation  Invalid username and password


Username and Password are empty - Invalid Login
	Open Browser To Login Page
    Click Login
    Verify Username Validation  Username is required.
    Verify Password Validation  Password is required.
