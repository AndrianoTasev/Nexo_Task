import Invetory from "../../pageObjects/inventoryPage"
import Login  from "../../pageObjects/loginPage"

const inventory = new Invetory();
const loginPage = new Login();


And('I click on Cart Icon', ()=> {
    inventory.clickCartIcon()
})

And('I add product {string} to cart', ()=> {
    inventory.findProduct()
})

Given('I navigate to login page', ()=> {
    loginPage.navigate()
})

Given('I login as standard user', (table)=> {
    table.hashes().forEach(row => {
        loginPage.enterUsername(row.username)
        loginPage.enterPassword(row.password)
        loginPage.clickLoginButton()
    }); 
})

And('I click Login button', ()=> {
    loginPage.clickLoginButton();
 })

 And('I click on product', (table)=> {
    table.hashes().forEach(row => {
       inventory.findProduct(row.productName)
    });
})

And('I click add to cart button', ()=> {
    inventory.clickAddToCartButton()
})

And('I navigate back to Products page', ()=> {
    inventory.navigateToProductsPage()
})

