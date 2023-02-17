import loginPage from '../pages/facebookLoginPage.cy'

describe('Facebook login', () => {
    it('Başarısız login testi', () => {
      cy.visit('www.facebook.com')
      loginPage.typeLoginCretid('asdasdasdsadsad', 'asdasdasd')
    })
  })