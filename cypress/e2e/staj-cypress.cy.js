describe('Google arama', () => {
  it('Visit google and search mobven', () => {
    cy.visit('https://www.google.com.tr')
    cy.get('.gLFyf').type('Mobven{ENTER}')
  })
})