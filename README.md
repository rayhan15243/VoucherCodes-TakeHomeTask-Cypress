# cypressTakeHomeTest
Test Engineer II - Take Home Task

Prerequisites:

1. Node (e.g. v12.19.0)
2. NPM - Node package manager (e.g. 6.14.8)
3. Git (e.g. 2.24.3 (Apple Git-128))


How to setup the repo:
1. In VSCODE terminal do git clone https://github.com/rayhan15243/cypressTakeHomeTest.git
2. In VSCODE terminal, do npm install - this will install the 
   required dependencies to be able to use Cypress locally in your machine. 



To run a test in the terminal and view results:
1. Do npx cypress run (This will execute the tests using the default browser (Electron)
2. Results will show in the terminal. For any failed tests screenshots and a video recording is generated.
   They can be accessed via the folders cypressTakeHomeTest/cypress/screenshots 
   and cypressTakeHomeTest/cypress/videos


To run a test via the Cypress GUI:
1. Do npx cypress open
2. Choose which browser to execute the tests in (e.g. if you have Chrome installed 
    in your machine the GUI will make it available as an option to execute the tests)