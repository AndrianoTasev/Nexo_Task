import Cart from "../../pageObjects/cartPage"
import Login from "../../pageObjects/loginPage"

const loginPage = new Login();
const cart = new Cart()

Given('I navigate to login page', ()=> {
    loginPage.navigate();
})

Given('I login as standard user', (table)=> {
    table.hashes().forEach(row => {
        loginPage.enterUsername(row.username)
        loginPage.enterPassword(row.password)
        loginPage.clickLoginButton()
    }); 
})

Then('Product should be visible', (table)=> {
    table.hashes().forEach(row => {
        cart.validateProductVisibleInCart(row.productName)
    });
})

Then('I should be navigated to Cart page', ()=> {
    cart.validateCartUrl()
})
 
And('I click Login button', ()=> {
    loginPage.clickLoginButton();
 })
