$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3401136896,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2797388887,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 318596558,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 478215902,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 41024836,
  "status": "passed"
});
formatter.after({
  "duration": 151893,
  "status": "passed"
});
formatter.before({
  "duration": 2530935240,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with correct username and password to fail",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-to-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the userform page wrongly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2359239099,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 149749696,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 527684894,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPageWrongly()"
});
formatter.result({
  "duration": 40018756,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"sdfgdsfsd\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CRDDDM7\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\vino\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59744}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 680dace2eae78ca3fab1ca8ea6de33eb\n*** Element info: {Using\u003did, value\u003dsdfgdsfsd}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.LoginStep.iShouldSeeTheUserformPageWrongly(LoginStep.java:78)\r\n\tat ✽.Then I should see the userform page wrongly(Login.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 116053,
  "status": "passed"
});
});