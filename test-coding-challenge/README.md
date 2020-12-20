# Solution for Test Automation Challenge 🔄
 
## Description
 
This solution has the framework to test Stan portal.
 
2 Test suits created with data driven tests
1) Video playback test
2) Validate Watch screen

To run the tests use command

'npm install' 

'npm run  test'

Note:-

"delete:reports": "del /f /s /q cypress\\reports 1>nul" this command might not run for Mac. I have developed this on windows and couldent tests it for Mac.
If this fails please modify "test" attribute in packae.json as below and execute and run again using npm run test:-

    "test": "npm run scripts || npm run posttest",


this will execute both the tests in headless mode and generated HTML report at the end of the execution.

Please refer to support/index.js for method to attach screenshots report and  scripts in package.json

Please note:- Validate video playback test might fail because of login captcha
 
This challenge is expected to take around 2-3 hours.
 

