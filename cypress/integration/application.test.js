
describe('Visit', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

  it('Expands a card when clicking on a grid card', () => {
    cy.contains('Jira')
      .parents()
      .siblings('.action')
      .children('.toggle')
      .click()
    cy.findByText('IL2 Ticket System')
      .should('exist')
  })
})
  