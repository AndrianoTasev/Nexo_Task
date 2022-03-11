class Inventory {

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