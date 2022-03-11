class Inventory {

    invetoryUrl = 'https://www.saucedemo.com/inventory.html';

    
    getUrl() {
        cy.url().should('eq', invetoryUrl)
        return this
    }

    findProduct(productName) {
       cy.contains(productName).click();
    }

    clickCartIcon() {
        cy.get('#shopping_cart_container').click()
    }

    clickAddToCartButton() {
        cy.get('.btn_inventory').click()
    }

    navigateToProductsPage() {
       cy.get('#back-to-products').click()
    }

}
export default Inventory