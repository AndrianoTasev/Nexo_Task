class Inventory {

    invetoryUrl = 'https://www.saucedemo.com/inventory.html';

    getUrl() {
        cy.url().should('eq', invetoryUrl)
        return this
    }

    findProduct(productName) {
        cy.get('#inventory_list [id*=inventory_item_name]').each(productName)
    }

    clickCartIcon() {
        cy.get('#shopping_cart_container').click()
    }


}
export default Inventory