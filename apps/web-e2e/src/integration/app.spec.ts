describe("web", () => {
  it("Should register", () => {
    cy.clearCookies();
    cy.visit("/");
    cy.register();
  });

  it("Should logout", () => {
    cy.logout();
  });

  it("Should login", () => {
    cy.clearCookies();
    cy.visit("/");
    cy.login();
  });
});
