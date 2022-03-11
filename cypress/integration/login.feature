Feature: Login Feature

    
    Background:
    Given I navigate to login page
    Scenario Outline: Login with multiple users
    When I enter '<username>' and '<password>'
    And I click Login button
    Then I should be able to login "<expectation>"
    Examples:
        | username                | password      |         expectation                     |
        | standard_user           | secret_sauce  |     User should be able to login        |
        | locked_out_user         | secret_sauce  |     User should not be able to login    |
        | problem_user            | secret_sauce  |     User should be able to login        |
        | performance_glitch_user | secret_sauce  |     User should be able to login        |

