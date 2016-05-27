*** Settings ***
Resource    ../../lib/browser/rs_browser.robot

*** Variables ***
${NOTIFICATION DIALOG COMPONENT ID}            notification
${NOTIFICATION DIALOG COMPONENT CONTENT ID}    notification-content
${NOTIFICATION DIALOG COMPONENT BUTTON ID}     notification-button
${NOTIFICATION DIALOG COMPONENT BADGE ID}      notification-badge
${NOTIFICATION DIALOG COCMPONENT}              css=[data-testid="${NOTIFICATION DIALOG COMPONENT ID}"]
${NOTIFICATION DIALOG CONTENT}                 ${NOTIFICATION DIALOG COCMPONENT} [data-testid="${NOTIFICATION DIALOG COMPONENT CONTENT ID}"]
${NOTIFICATION DIALOG CLOSE BUTTON}            ${NOTIFICATION DIALOG COCMPONENT} [data-testid="${NOTIFICATION DIALOG COMPONENT BUTTON ID}"]
${NOTIFICATION DIALOG BADGE}                   ${NOTIFICATION DIALOG COCMPONENT} [data-testid="${NOTIFICATION DIALOG COMPONENT BADGE ID}"]

*** Keywords ***
Close Notification Dialog
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Click Element    ${NOTIFICATION DIALOG CLOSE BUTTON}

Wait Until Notification Dialog Shows Up
    [Arguments]    ${wait time}=30s
    Wait Until Keyword Succeeds    ${wait time}    ${RETRY EVERY}    Verify Notification Dialog Exists    ${TRUE}

Verify Notification Dialog Exists
    [Arguments]    ${should exist}=${TRUE}
    Run Keyword If    ${should exist} == ${TRUE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${NOTIFICATION DIALOG CONTENT}
    Run Keyword If    ${should exist} == ${FALSE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible     ${NOTIFICATION DIALOG CONTENT}

Verify Notification Dialog Message
    [Arguments]    ${expected message}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${NOTIFICATION DIALOG CONTENT}    ${expected message}

Verify Notification Badge
    [Arguments]    ${expected badge}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${NOTIFICATION DIALOG BADGE}    ${expected badge}