declare namespace Cypress {
  // eslint-disable-next-line
  interface Chainable<Subject> {
    login(): void;
    logout(): void;

    getByDataTestId: <E extends Node = HTMLElement>(
      dataTestId: string
    ) => Chainable<JQuery<E>>;
  }
}
