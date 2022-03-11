import  Login  from "../../pageObjects/loginPage"

const loginPage = new Login();

And('I click Login button', ()=> {
    loginPage.clickLoginButton();
 })

When('I enter {string} and {string}', (username, password)=> {
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
})

Then('I should be able to login {string}', (expectation)=> {
        loginPage.checkUserIsLoged(expectation)
})