import Cart from "../../pageObjects/cartPage"

const cart = new Cart()

Then('Products should be visible', (table)=> {
    table.hashes().forEach(row => {
        cart.validateProductVisibleInCart(row.productName)
    });
})