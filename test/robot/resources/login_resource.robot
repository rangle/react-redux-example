*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported Selenium2Library.
Library           Selenium2Library

*** Variables ***
${SERVER}         localhost:8080
${BROWSER}        chrome
${DELAY}          0.5
${VALID USER}     user
${VALID PASSWORD}  pass

${USERNAME LABEL}  id=qa-uname-label
${USERNAME INPUT}  id=qa-uname-input
${PASSWORD LABEL}  id=qa-password-label
${PASSWORD INPUT}  id=qa-password-input
${LOGIN BUTTON}  id=qa-login-button
${CLEAR BUTTON}  id=qa-clear-button

${USERNAME VALIDATION}  id=qa-uname-validation
${PASSWORD VALIDATION}  id=qa-password-validation
${ALERT VALIDATION}  id=qa-alert

${COUNTER HEADING}  id=qa-counter-heading

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${SERVER}    ${BROWSER}
    Maximize Browser Window
    Title Should Be  Rangle.io - React / Redux Seed



Verify user name field label
    Wait Until Element Is Visible  ${USERNAME LABEL}
    Element Text Should Be  ${USERNAME LABEL}  Username

Verify password field label
    Wait Until Element Is Visible  ${PASSWORD LABEL}
    Element Text Should Be  ${PASSWORD LABEL}  Password


Input user name
    [Arguments]  ${inputUserName}
    Wait Until Element Is Visible  ${USERNAME INPUT}
    Input Text  ${USERNAME INPUT}  ${inputUserName}

Input Password
    [Arguments]  ${inputPassword}
    Wait Until Element Is Visible  ${PASSWORD INPUT}
    Input Text  ${PASSWORD INPUT}  ${inputPassword}

Click Login
	Wait Until Element Is Visible  ${LOGIN BUTTON}
	Click Element  ${LOGIN BUTTON}

Verify user is successfully logged in
	Wait Until Element Is Visible  ${COUNTER HEADING}
	Element Text Should Be  ${COUNTER HEADING}  Counter

Verify Username Validation
    [Arguments]  ${userValidation}
    Wait Until Element Is Visible  ${USERNAME VALIDATION}
    Element Text Should Be  ${USERNAME VALIDATION}  ${userValidation}

Verify Password Validation
    [Arguments]  ${passValidation}
    Wait Until Element Is Visible  ${PASSWORD VALIDATION}
    Element Text Should Be  ${PASSWORD VALIDATION}  ${passValidation}


Verify Alert Validation
    [Arguments]  ${alValidation}
    Wait Until Element Is Visible  ${ALERT VALIDATION}
    Element Text Should Be  ${ALERT VALIDATION}  ${alValidation}
