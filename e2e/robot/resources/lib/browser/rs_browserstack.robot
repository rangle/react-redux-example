*** Settings ***
Library    Selenium2Library

*** Variables ***
${BROWSERSTACK.PLATFORM}    DESKTOP
${BROWSERSTACK.ENABLE}    ${FALSE}
${BROWSERSTACK.USERNAME}
${BROWSERSTACK.KEY}
${BROWSERSTACK.REMOTE URL}    http://${BROWSERSTACK.USERNAME}:${BROWSERSTACK.KEY}@hub.browserstack.com/wd/hub
${BROWSERSTACK.LOCAL}    true
${BROWSERSTACK.BROWSER}    Chrome
${BROWSERSTACK.BROWSER VERSION}    48
${BROWSERSTACK.OS}    Windows
${BROWSERSTACK.OS VERSION}    10
${BROWSERSTACK.RESOLUTION}    1680x1050
${BROWSERSTACK.DEVICE}
${BROWSERSTACK.DEVICE.ORIENTATION}
${BROWSERSTACK.DEBUG}

*** Keywords ***
BrowserStack Run On Desktop
    [Arguments]    ${url}    ${browser}=Chrome
    Open Browser    ${url}    browser=${browser}    remote_url=${BROWSERSTACK.REMOTE URL}    desired_capabilities=browserstack.local:${BROWSERSTACK.LOCAL},browser:${BROWSERSTACK.BROWSER},browser_version:${BROWSERSTACK.BROWSER VERSION},os:${BROWSERSTACK.OS}, os_version:${BROWSERSTACK.OS VERSION},resolution:${BROWSERSTACK.RESOLUTION}

BrowserStack Run On Mobile
    [Arguments]    ${url}    ${browser}=Chrome
    Open Browser    url=${URL}    remote_url=${BROWSERSTACK.REMOTE URL}    desired_capabilities=browserstack.local:true,device:${BROWSERSTACK.DEVICE},os:${BROWSERSTACK.OS},browser:${BROWSERSTACK.BROWSER},browserstack.debug:${BROWSERSTACK.DEBUG} deviceOrientation: portrait, landscape Default: ${BROWSERSTACK.DEVICE.ORIENTATION}
