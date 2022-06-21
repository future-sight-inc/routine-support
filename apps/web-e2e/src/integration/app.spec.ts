describe("web", () => {
  it("Should login", () => {
    cy.visit("/");
    cy.clearCookies();
    cy.login();
  });

  it("Should logout", () => {
    cy.logout();
  });
});
