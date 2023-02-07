# VoucherCodes Test Engineer Task

The reason why I chose to use Cypress for this task is because Cypress requires minimal setup
and has brilliant documentation. Also the Launchpad feature is brilliant as you can 
observe the execution and results visually at the same time. 

Prerequisites:

1. NPM and Node (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


How to setup the repo:
1. Open an IDE of your choice e.g. VSCode and type in a terminal: 
   
   ```bash

   git clone https://github.com/rayhan15243/cypressTakeHomeTest.git

   ```

2. Then type into the terminal: 
   
   ```bash   

   npm install 

   ```
   This will install the required dependencies for to run Cypress locally in your machine. 


To run a test in headless mode and view results:
1. Type into the terminal: 
   
   ```
   npx cypress run 
   ```
   This will execute the tests using the default browser (Electron)

2. Results will show in the terminal. For any failed tests, 
   screenshots and a video recording is generated.
   They can be accessed via the folders cypressTakeHomeTest/cypress/screenshots 
   and cypressTakeHomeTest/cypress/videos


To run a test via the Cypress Launchpad:
1. Type into the terminal: 
   
   ```
   npx cypress open
   ```
2. Choose which browser to execute the test in (e.g. if you have Chrome installed 
   in your machine the browser will displayed in the Launchpad as an option to execute the tests)