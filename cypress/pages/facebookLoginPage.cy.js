class loginPage {
    elements = {
        emailInput: () => cy.get("[data-testid='royal_email']"),
        passwordInput : () => cy.get('[data-testid="royal_pass"]'),
        loginButton : () => cy.get('[data-testid="royal_login_button"]')
    }

    typeLoginCretid(email, password){
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
        //this.elements.loginButton().click()
    }

}


module.exports = new loginPage()