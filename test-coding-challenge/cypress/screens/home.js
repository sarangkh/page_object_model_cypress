//Import selectors
import { selectors } from '../fixtures/selectors';

class HomePage {

  validatePlayBack = (videoID) => {
    cy.get(selectors.HOME.SEARCH_ICON).click();

    //To make this method more generic playing video directly by accessing url instead of selecting it from tile 
    cy.visit('https://play.stan.com.au/programs/' + videoID);
    cy.get(selectors.HOME.PLAY_ICON).click();

    //Capturing start time of video
    cy.get(selectors.HOME.CURRENT_VIDEO_TIME).invoke('val').then($startTime => {
      
      //wait for 20 seconds
      cy.wait(20000);
      
      //capture end time and return true only if end time is greater than start time
      cy.get(selectors.HOME.CURRENT_VIDEO_TIME).invoke('val').then($endTime => {
        if ($startTime.replace(':') < $endTime.replace(':'))
          return true;
        else
          return false;
      });
    });
  }
}

export default HomePage