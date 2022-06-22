import { HeaderLocators } from "apps/web/src/components/Header/locators";
import { ConfirmationModalLocators } from "apps/web/src/components/ConfirmationModal/locators";
import { LoginFormLocators } from "apps/web/src/features/coach/components/Forms/LoginForm/locators";
import { ProfileModalLocators } from "apps/web/src/features/coach/components/ProfileModal/locators";

Cypress.Commands.add("getByDataTestId", (dataTestId: string) => {
  return cy.get(`[data-testid="${dataTestId}"]`);
});

Cypress.Commands.add("register", () => {
  cy.getByDataTestId(LoginFormLocators.LinkToRegister).click();
  cy.get('input[type="text"]').type(Cypress.env("COACH_USER_NAME"));
  cy.get('input[type="email"]').type(Cypress.env("COACH_EMAIL"));
  cy.get('input[type="password"]').type(Cypress.env("COACH_PASSWORD"));
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("login", () => {
  cy.get('input[type="email"]').type(Cypress.env("COACH_EMAIL"));
  cy.get('input[type="password"]').type(Cypress.env("COACH_PASSWORD"));
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("logout", () => {
  cy.getByDataTestId(HeaderLocators.Logout).click();
  cy.getByDataTestId(ConfirmationModalLocators.ConfirmButton).click();
});

Cypress.Commands.add("deleteProfile", () => {
  cy.getByDataTestId(HeaderLocators.OpenProfile).click();
  cy.getByDataTestId(ProfileModalLocators.DeleteProfileButton).click();
  cy.getByDataTestId(ConfirmationModalLocators.ConfirmButton).click();
});
