import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import  Login  from "../../pageObjects/loginPage"

const loginPage = new Login();

Given('I navigate to login page', ()=> {
    loginPage.navigate();
})

//When('I enter username {string}" ', (dataTable)=> {
//    dataTable.hashes().forEach(row => {
//        loginPage.enterUsername(row.username);
//    });
//})

When('I enter username {string}', (username)=> {
    loginPage.enterUsername(username);
})

And('I enter password {string}', (password)=> {
    loginPage.enterPassword(password);
})

//Then('I enter {string}', (table)=> {
//    table.hashes().forEach(row => {
//        loginPage.enterPassword(row.password);
//    });
// })

And('I click Login button', ()=> {
    loginPage.clickLoginButton();
 })

Then('I should be able to login', ()=> {
    cy.title().should('eq', 'Swag Labs');
})

Given('I login as standard user', (table)=> {
    table.hashes().forEach(row => {
        loginPage.enterUsername(row.username);
        loginPage.enterPassword(row.password);
    });
})

When('I enter {string} and {string}', (table)=> {
    table.hashes().forEach(row => {
        loginPage.enterUsername(row.username);
        loginPage.enterPassword(row.password);
    });
})


 