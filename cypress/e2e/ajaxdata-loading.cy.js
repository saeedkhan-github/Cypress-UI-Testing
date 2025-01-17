describe('template spec', () => {
  it('passes', () => {
    cy.visit('/ajax');

    cy.intercept('GET','**/ajaxdata').as('loadstate');
    cy.get('p.bg-success').should('not.exist');
    cy.get('.btn.btn-primary').click();
    cy.wait('@loadstate');
    cy.get('.bg-success').should('contain.text','Data loaded with AJAX get request.');

  })
})