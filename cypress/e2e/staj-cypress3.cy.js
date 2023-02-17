describe('Facebook login', () => {
    it('Başarısız login testi', () => {
      cy.visit('www.facebook.com')
      cy.login('volkan@gmail.com','S12345')
    })
  })