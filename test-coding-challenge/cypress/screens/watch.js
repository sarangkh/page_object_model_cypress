//Import selectors
import {
  selectors
} from '../fixtures/selectors';

class WatchScreen {
  //Methods to validate watch screen
  validateAvailabilityOfTrailer = (name) => {
    cy.get('img[title="' + name + '"]').click();
    cy.get(selectors.WATCH.TRAILER_IMG).should('be.visible');

    //this is a pre-requisite for next iteration
    cy.visit('https://www.stan.com.au/watch/');
  }
}
export default WatchScreen