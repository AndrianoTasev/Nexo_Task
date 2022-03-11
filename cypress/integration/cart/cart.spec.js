import { Then } from "cypress-cucumber-preprocessor/steps/index"
import Cart from "../../pageObjects/cartPage"

const cart = new Cart()

Then('Product should be visible', (table)=> {
    table.hashes().forEach(row => {
        cart.validateProductVisibleInCart(row.productName)
    });
})