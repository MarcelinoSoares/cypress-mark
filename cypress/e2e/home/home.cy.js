describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the title ', () => {
    cy.get('title').should('contain', 'Gerencie suas tarefas com Mark L');
  });


});
