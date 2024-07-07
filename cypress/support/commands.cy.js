// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("shouldExistBeVisibleAndHaveValue", (item, value, i) => {
  if (i == undefined) {
    i = 0;
  }
  cy.get(item).eq(i).should("exist").and("be.visible").and("have.value", value);
});

Cypress.Commands.add("shouldExistBeVisibleAndContainText", (item, text, i) => {
  if (i == undefined) {
    i = 0;
  }
  cy.get(item)
    .eq(i)
    .should("exist")
    .and("be.visible")
    .and("contain.text", text);
});

Cypress.Commands.add("shouldExistBeVisibleAndHaveText", (item, text, i) => {
  if (i == undefined) {
    i = 0;
  }
  cy.get(item).eq(i).should("exist").and("be.visible").and("have.text", text);
});

Cypress.Commands.add("shouldExistBeVisibleAndNotBeEmpty", (item, i) => {
  if (i == undefined) {
    i = 0;
  }
  cy.get(item).eq(i).should("exist").and("be.visible").and("not.be.empty");
});

Cypress.Commands.add("shouldExistAndBeVisible", (item, i) => {
  if (i == undefined) {
    i = 0;
  }
  cy.get(item).eq(i).should("exist").and("be.visible");
});

Cypress.Commands.add("shouldExistBeVisibleAndHaveLength", (items, length) => {
  cy.get(items).should("exist").and("be.visible").and("have.length", length);
});
