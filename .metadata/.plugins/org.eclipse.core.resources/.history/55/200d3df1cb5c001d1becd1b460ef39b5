Feature: Techfios billing login validation

  Scenario: User should be able to login with valid credentials
    Given User is on techfios login page
    When user enter Username as "demo@techfios.com"
    When User enter Password as "abc123"
    And click on signin button
    Then User should land on the Dashboard Page
    And User clicks on bankCash 
    And User clicks on newAccount
    Then User should land on the Add New Account Page
    And User should enter accountTitle"J450A" 
    And User should enter description "Saving" 
    And User should enter initialBalance"10,563"
    And User should enter accountNumber "54875692" 
    And User should enter contactPerson"James Brown"
    And User should  enter Phone"3148975694 "
    And User should enter accountTitle"PlatinumPlus"
    And User should enter internetBankingURL"ChaseBank.com "
    And User shoudl clicks on newAccount 
    Then User should be able to validate account created successfull
