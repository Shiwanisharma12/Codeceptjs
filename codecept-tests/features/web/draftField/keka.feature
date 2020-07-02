Feature: keka application automation
@smoke
  Scenario: user will log into the application and see month wise tabs and logout from the application
   Given User is on keke page
    When  User wil select login with keka password option
    And   User will enter login credentials and loginto the application
    Then  user will click on monthwise tabs to see attandance
    And   User will logout from the application