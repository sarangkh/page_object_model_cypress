import { selectors } from '../fixtures/selectors';
class LaunchScreen {

  visit = () => {
    cy.visit('/');
    return this;
  }
   login = (email, password) => {
    cy.get(selectors.LAUNCH.LOGIN_LINK).click(); 
    cy.get(selectors.LAUNCH.LOGIN_EMAIL_INPUT).type(email); 
    cy.get(selectors.LAUNCH.LOGIN_PASSWORD_INPUT).type(password)
    cy.get(selectors.LAUNCH.LOGIN_BUTTON).click();
    return this;
  }
}
export default LaunchScreen