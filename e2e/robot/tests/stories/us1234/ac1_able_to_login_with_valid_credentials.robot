*** Settings ***
Default Tags    us1234
Resource    ../../../resources/features/login/rs_login.robot

Suite Setup    TEST SETUP
Suite Teardown    Exit Browser

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome
${VALID USERNAME}    user
${VALID PASSWORD}    pass

*** Test Cases ***
01 Verify Username Placeholder
    Verify Login Username Placeholder    ${EMPTY}

02 Verify Password Placeholder
    Verify Login Password Placeholder    ${EMPTY}

03 Verify Login Button Label
    Verify Login Submit Button Label    Login

04 Verify Login Username Label
    Verify Login Username Label    Username

05 Verify Login Password Label
    Verify Login Password Label    Password

06 Able To Login With Valid Credentials
    [Tags]    Smoke
    Login    ${VALID USERNAME}    ${VALID PASSWORD}
    Verify No Login Error

07 Valid Login Navigates To Counter Page
    Page Should Contain    Counter

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
    #THIS WILL SLOW DOWN ROBOT SO YOU CAN SEE WHAT IS HAPPENING
    #Set Selenium Speed    1
