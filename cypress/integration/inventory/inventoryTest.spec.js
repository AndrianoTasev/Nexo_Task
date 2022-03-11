import Invetory from "../../pageObjects/inventoryPage"

const inventory = new Invetory();

And('I click on Cart Icon', ()=> {
    inventory.clickCartIcon()
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