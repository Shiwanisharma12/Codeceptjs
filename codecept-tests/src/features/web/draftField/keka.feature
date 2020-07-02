Feature: keka Automation
  Background:user is logging into the application
    Given user is on keka login page
    When user select login with keka password
    And   User enters login credentials and hit submit


  Scenario: User will login into the application and perform attendance actions and log out.

    And  user will be logged in and see monthwise attendance by clicking on each tab
    Then user will be logged out

  @smoke
  Scenario: user will visit each tab and verify each tab
   And user will visit all the tabs and verify each tab
