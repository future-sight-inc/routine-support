declare namespace Cypress {
  // eslint-disable-next-line
  interface Chainable<Subject> {
    register(): void;
    login(): void;
    logout(): void;
    deleteProfile(): void;

    getByDataTestId: <E extends Node = HTMLElement>(dataTestId: string) => Chainable<JQuery<E>>;
  }
}
