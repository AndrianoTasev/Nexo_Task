class Cart {

    validateProductVisibleInCart(productName) {
        cy.contains(productName).should('be.visible')
    }

    validateCartUrl() {
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    }
} 
export default Cart