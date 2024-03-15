describe('react-redux-dashboard tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should test the heading', () => {
    cy.get('[data-test-id=heading1]').should('be.visible');
    cy.get('[data-test-id=heading1]').should('have.text', 'Customer Dashboard');
  });

  it('should check for menu', () => {
    cy.contains('Add customer');
    cy.contains('View customers');
    cy.contains('Search');
  });

  it('should check for page title', () => {
    cy.contains('Customer list');
  });

  it('should open "Customer form" page', () => {
    cy.get('#root>div.container>div>div.col-4>div>a:nth-child(1)').as('menu1');
    cy.get('@menu1').should('exist');
    cy.get('@menu1').click();
    cy.contains('Customer details');
    cy.get('input[type=radio][name=gender][value=Male]').should('exist');
    cy.get('input[type=radio][name=gender][value=Female]').should('exist');
    cy.get('input[type=text][name=firstname]').should('exist');
  });
});

describe('New customer form tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/new-customer');
  });

  it('should validate the customer form', () => {
    cy.get('button.btn.btn-primary').click();
    cy.contains('Firstname is required');
    cy.contains('Email is required');
    cy.contains('Phone is required');
  });
});


// to install local dependency: npm i -D cypress
// to initialize and start the e2e tests: npx cypress open

// #root > div.container > div > div.col-4 > div > a:nth-child(1)
