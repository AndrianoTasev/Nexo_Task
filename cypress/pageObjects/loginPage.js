class Login {

    navigate(){
        cy.visit('https://www.saucedemo.com/')
        return this
    }
    
    enterUsername(username) {
        cy.get('#user-name').click().type(username)
        return this
    }

    enterPassword(password) {
        cy.get('#password').type(password)
        return this
    }
    
    clickLoginButton(){
        cy.get('#login-button').click()
        return this
    }
}
export default Login