Feature: Login Page

    
    Background:
    Given I navigate to login page
    Scenario: Login with different users
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click Login button
    Then I should be able to login

    Scenario: Login with standard user
    Given I login as standard user
    | username     | password     |
    | standard_user| secret_sauce |
     And I click Login button
    Then I should be able to login


    Scenario Outline: Login with multiple users
    When I enter "<username>" and "<password>"
    Then I click Login button
    Examples:
        | username | password |
        | standard_user  | secret_sauce  |
        | locked_out_user | secret_sauce  |
 #  Examples:
 #      | username        | password      |
 #      | standard_user   | secret_sauce  |
 #      | locked_out_user | secret_sauce  |

