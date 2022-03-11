import  Login  from "../../pageObjects/loginPage"

const loginPage = new Login();

Given('I navigate to login page', ()=> {
    loginPage.navigate();
})

When('I enter username {string}', (username)=> {
    loginPage.enterUsername(username);
})

And('I enter password {string}', (password)=> {
    loginPage.enterPassword(password);
})

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