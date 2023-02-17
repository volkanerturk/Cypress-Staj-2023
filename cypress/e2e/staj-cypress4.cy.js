describe('Switch tab test', () => {
    it('Switch tab', () => {
      cy.visit('https://the-internet.herokuapp.com/windows')
      cy.screenshot('stajprogrami')
      cy.get('.example > a').invoke('removeAttr', 'target').click()
      cy.contains('New Window').screenshot()
    })
  })