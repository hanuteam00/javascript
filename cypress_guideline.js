//arguments
https://docs.cypress.io/api/commands/type#Arguments
cy.visit('https://example.cypress.io/todo')
cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

//find parent
cy.visit('https://example.cypress.io/todo')
cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

// to traverse multiple levels up the dom until we find the corresponding <li> element.
// Once we get that element, we can assert that it has the completed class.
cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
