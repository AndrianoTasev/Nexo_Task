Feature: Inventory Page

Background: 
Given I navigate to login page
When I login as standard user
| username        | password     |
| standard_user   | secret_sauce |
Scenario: Add Multiple Products to Cart
Given I click on product
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
And I navigate back to Products page
When I click on Cart Icon
Then I should be navigated to Cart page
And Product should be visible
|    productName           |
|   Sauce Labs Bike Light  |
|   Test.allTheThings() T-Shirt (Red)  |
|   Sauce Labs Bolt T-Shirt  |
|   Sauce Labs Backpack      |