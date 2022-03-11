class Cart {

    validateProductVisibleInCart(productName) {
        cy.contains(productName).should('be.visible')
    }

} 
export default Cart