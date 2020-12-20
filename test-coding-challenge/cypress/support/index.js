// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//screenshots configuration
Cypress.Screenshot.defaults({
  trashAssetsBeforeRuns: true,
  disableTimersAndAnimations: false,
});

//adding screenshots to the report
const addContext = require('mochawesome/addContext');
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({
      test
    }, `assets/${Cypress.spec.name}/${screenshotFileName}`);
  }
});