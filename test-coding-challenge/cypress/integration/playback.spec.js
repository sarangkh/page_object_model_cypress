// import screens
import launch from '../screens/launch';
import account from '../screens/profile';
import home from '../screens/home';

//import test data and selectors
import { tdata } from '../fixtures/testdata';
import { filters } from '../fixtures/movies';

describe('Tests to validate video playback', () => {
  const launchScreen = new launch();
  const accountScreen = new account();
  const homeScreen = new home();

  it('Validate Playback', () => {
    cy.visit('https://play.stan.com.au/');
    launchScreen.login(tdata.login.EMAIL, tdata.login.PASSWORD);
    accountScreen.selectProfile();

    //Using filters to make this test data driven for n number of movies
    cy.wrap(filters).each(filter => {

      //assertion for video playback
      expect(homeScreen.validatePlayBack(filter.id)).to.be.true;
    });
  });
})