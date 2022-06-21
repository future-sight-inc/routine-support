import { HeaderLocators } from "apps/web/src/components/Header/locators";
import { ConfirmationModalLocators } from "apps/web/src/components/ConfirmationModal/locators";

Cypress.Commands.add("getByDataTestId", (dataTestId: string) => {
  return cy.get(`[data-testid="${dataTestId}"]`);
});

Cypress.Commands.add("login", () => {
  cy.get('input[type="email"]').type("nikitadmitriev97@mail.ru");
  cy.get('input[type="password"]').type("Dinkimom48");
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("logout", () => {
  cy.getByDataTestId(HeaderLocators.Logout).click();
  cy.getByDataTestId(ConfirmationModalLocators.ConfirmButton).click();
});
