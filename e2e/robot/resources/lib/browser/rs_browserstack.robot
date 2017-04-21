*** Settings ***
Library    Selenium2Library
Library    Collections

*** Variables ***
${BROWSERSTACK.PLATFORM}              DESKTOP
${BROWSERSTACK.ENABLED}                ${FALSE}
${BROWSERSTACK.USERNAME}
${BROWSERSTACK.KEY}
${BROWSERSTACK.REMOTE.URL}            http://${BROWSERSTACK.USERNAME}:${BROWSERSTACK.KEY}@hub.browserstack.com/wd/hub
${BROWSERSTACK.LOCAL}                 false
${BROWSERSTACK.BROWSER}               Safari
${BROWSERSTACK.BROWSER.NAME}
${BROWSERSTACK.BROWSER.VERSION}       9.1
${BROWSERSTACK.OS}                    OS X
${BROWSERSTACK.OS.VERSION}            El Capitan
${BROWSERSTACK.RESOLUTION}            1024x768
${BROWSERSTACK.DEVICE}
${BROWSERSTACK.DEVICE.ORIENTATION}    portrait
${BROWSERSTACK.DEBUG}                 False
${BROWSER.LOAD.TIMEOUT}               120

*** Keywords ***
BrowserStack Run On Desktop
    [Arguments]    ${url}
    &{DESIRED_CAPABILITIES}=    Create Dictionary
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browser               ${BROWSERSTACK.BROWSER}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browser_version       ${BROWSERSTACK.BROWSER.VERSION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    os                    ${BROWSERSTACK.OS}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    os_version            ${BROWSERSTACK.OS.VERSION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    resolution            ${BROWSERSTACK.RESOLUTION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.local    ${BROWSERSTACK.LOCAL}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.debug    ${BROWSERSTACK.DEBUG}
    Log    Running Desktop with caps = ${DESIRED_CAPABILITIES}
    Start BrowserStack With Timeout    ${url}    ${BROWSERSTACK.REMOTE.URL}    ${BROWSER.LOAD.TIMEOUT}    ${DESIRED_CAPABILITIES}

BrowserStack Run On Mobile
    [Arguments]    ${url}
    &{DESIRED_CAPABILITIES}=    Create Dictionary
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserName           ${BROWSERSTACK.BROWSER.NAME}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    device                ${BROWSERSTACK.DEVICE}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    deviceOrientation     ${BROWSERSTACK.DEVICE.ORIENTATION}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.local    ${BROWSERSTACK.LOCAL}
    Set To Dictionary    ${DESIRED_CAPABILITIES}    browserstack.debug    ${BROWSERSTACK.DEBUG}
    Log    Running Mobile with caps = ${DESIRED_CAPABILITIES}
    Start BrowserStack With Timeout    ${url}    ${BROWSERSTACK.REMOTE.URL}    ${BROWSER.LOAD.TIMEOUT}    ${DESIRED_CAPABILITIES}

Start BrowserStack With Timeout
    [Arguments]    ${url}    ${remote_url}    ${load timeout}    ${desired capabilities}
    ${loaded}=    Set Variable    ${FALSE}
    : FOR    ${try}    IN RANGE    3
    \    Close All Browsers
    \    Run Keyword And Ignore Error    Open Browser    ${EMPTY}    remote_url=${remote_url}    desired_capabilities=${desired capabilities}
    \    Sleep    1
    \    ${total timeout}=    Evaluate    ${load timeout} * ${try + 1}
    \    Log    Attempt number ${try} to load ${url} with timeout of ${total timeout}!
    \    ${body}=    Get Web Element    css=body
    \    ${driver}=    Set Variable    ${body.parent}
    \    Call Method    ${driver}    set_page_load_timeout    ${total timeout}
    \    ${loaded}=    Run Keyword And Return Status    Go To    ${url}
    \    Exit For Loop If    ${loaded}