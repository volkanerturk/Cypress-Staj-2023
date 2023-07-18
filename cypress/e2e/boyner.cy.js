Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
  });


  describe('template spec', () => {
    it('passes', () => {
    cy.viewport(1920, 920)
    cy.visit('https://boyner.com.tr')
    cy.get(':nth-child(2) > .mega-menu_gift__ccvMi > span').click()
    cy.wait(2000)
    cy.get('[style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="T-Shirt"]').click()
    cy.wait(3000)
    cy.get('[data-key="0"] > .product-item_root__6ZVGl > .product-item_image__IxD4T > :nth-child(3) > div > span > img').click()
    cy.wait(3000)
    cy.get('.select-size__indicator').click()
    cy.wait(2500)
    cy.get('.select-option_defaultText__1AKcO').contains('S').click()
    cy.get(':nth-child(6) > .login-button_box__dnyuU').click()  
    })
})



