describe('Task manager tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should add a new task', () => {
    cy.get('input').type('this is a new task{enter}');
    cy.get('input').should('have.value', '');
    cy.get('h5.list-group-item').its('length').should('equal', 7);
    cy.get('h5.list-group-item:nth-child(7)').should(
      'have.text',
      'this is a new task'
    );
  });

  it('should load 6 tasks initially', () => {
    cy.get('h5.list-group-item').its('length').should('equal', 6);
  });

  it('should change the status of one task by clicking on it', () => {
    cy.get('h5.list-group-item:nth-child(1)')
      .should('have.css', 'text-decoration')
      .and('match', /line-through/);

    cy.get('h5.list-group-item:nth-child(1) > span').click();

    cy.get('h5.list-group-item:nth-child(1)')
      .should('have.css', 'text-decoration')
      .and('match', /none/);
  });

  it('should delete a task', () => {
    cy.get('h5.list-group-item:nth-child(2)').contains('Learn react state');
    cy.get('h5.list-group-item:nth-child(2) > :nth-child(2)').click();
    cy.get('h5.list-group-item:nth-child(2)').should(
      'not.contain',
      'Learn react state'
    );
  });
});
