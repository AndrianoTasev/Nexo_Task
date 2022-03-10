Feature: Inventory Page


    Background: 
    Given I navigate to login page
    Given I login as standard user
       | username     | password     |
    | standard_user| secret_sauce |
    And I click Login button
    Scenario: click Cart Icon
    And I click on Cart Icon