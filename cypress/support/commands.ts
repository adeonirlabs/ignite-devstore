/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    search(query: string): Chainable<void>
  }
}

Cypress.Commands.add('search', (query: string) => {
  cy.get('input[name="q"]').type(query).parent('form').submit()
})
