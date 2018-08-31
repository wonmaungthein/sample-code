const wdio = require("webdriverio");

const opts = {
    port: 4723,
    desiredCapabilities: {
        platformName: "Android",
        platformVersion: "9",
        deviceName: "Android_Accelerated_Nougat:5554",
        app: "/Users/wonmaungthein/Desktop/sample-code/ApiDemos-debug.apk",
        automationName: "UiAutomator2"
    }
};

const client = wdio.remote(opts);

client
    .init()
    .click("~App")
    .click("~Alert Dialogs")
    .back()
    .back()
    .end();