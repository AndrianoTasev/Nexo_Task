Feature: Inventory Page

Background: 
Given I navigate to login page
Given I login as standard user
| username        | password     |
| standard_user   | secret_sauce |
Scenario: Add Products
And I click on product
|    productName             |
|   Sauce Labs Backpack      |
And I click add to cart button
And I navigate back to Products page
And I click on product
|    productName             |
|   Sauce Labs Bolt T-Shirt  |
And I click add to cart button
And I navigate back to Products page
And I click on product
|    productName                       |
|   Test.allTheThings() T-Shirt (Red)  |
And I click add to cart button
And I navigate back to Products page
And I click on product
|    productName           |
|   Sauce Labs Bike Light  |
And I click add to cart button