import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import Invetory from "../../pageObjects/inventoryPage"

const inventory = new Invetory();

And('I click on Cart Icon', ()=> {
    inventory.clickCartIcon()
})

And('I add product {string} to cart', ()=> {
    inventory.findProduct()
})
