describe("web", () => {
  beforeEach(() => cy.visit("/"));

  it("Should login", () => {
    cy.get('input[type="email"]').type("nikitadmitriev97@mail.ru");
    cy.get('input[type="password"]').type("Dinkimom48");
    cy.get('button[type="submit"]').click();
  });

  // 1 Auth

  // 1.1 register (puplya puplya)

  // 1.2 logout

  // 1.3 login

  // afterAll -> user delete
});
