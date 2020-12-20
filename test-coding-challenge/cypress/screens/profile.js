//Import selectors
import { selectors } from '../fixtures/selectors';

class ProfileScreen {

  //Methods to validate profiles screen
   selectProfile = () => {
    cy.get(selectors.PROFILES.DEFAULT_PROFILE_LINK).click(); 
  }
}
export default ProfileScreen