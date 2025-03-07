// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('createTask', (taskName = '') => {
  cy.get('input[placeholder="Add a new Task"]').as('inputTask')
  
  if (taskName !== '') {
    cy.get('@inputTask')
      .type(taskName)
  }
  
  cy.contains('button', 'Create').click()
})

Cypress.Commands.add('deleteTask', (taskName) => {
  cy.contains('p', taskName).parent().find('button[class*=ItemDelete]').click();
  cy.contains('p', taskName).should('not.exist');
});


Cypress.Commands.add('validationMessage', (text) => {
  cy.get('#newTask').invoke('prop', 'validationMessage').should((text) => {
    expect(text).to.equal(text);
  });
});

Cypress.Commands.add('shouldHaveText', (taskName) => {
cy.contains('main div p', taskName).should('be.visible').should('have.text', taskName);
});

Cypress.Commands.add('shouldNotHaveText', (taskName) => {
cy.contains('main div p', taskName).should('not.exist');
});

Cypress.Commands.add('alertMessage', (text) => {  
  cy.get('#swal2-html-container').should('be.visible').should('have.text', text);
});

Cypress.Commands.add('buttonAlertConfirm', () => {
  cy.contains('button', 'Ok').should('be.enabled').click();
});

Cypress.Commands.add('toggleTask', (taskName) => {
  cy.contains('p', taskName).parent().find('button[class*=ItemToggle]').click();
});

Cypress.Commands.add('isCompleteTask', (taskName) => {
  cy.contains ('p', taskName).should('have.css', 'text-decoration-line', 'line-through');
});
