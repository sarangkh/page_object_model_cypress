// import screens
import watch from '../screens/watch';

describe('Tests to validate Watch screen', () => {
  const watchScreen = new watch();
  before('login to payroll', function() {
  // Using fixtures for reading test data from json file  
  cy.fixture('watch.json').as('data');
  cy.visit('https://www.stan.com.au/watch/');
  });

  it('Validate availability of trailer', function () {

    //using json file to iterate through n number of movies and validation of details
    //validating availability of trailer here
    for (let i = 0; i < this.data.length; i++) {
      watchScreen.validateAvailabilityOfTrailer(this.data[i].Name);      
    }
  })
})