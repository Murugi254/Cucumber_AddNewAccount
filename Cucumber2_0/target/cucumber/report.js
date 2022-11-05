$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechfiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios billing login validation",
  "description": "",
  "id": "techfios-billing-login-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2789526700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter Username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter Password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should land on the Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on the Add New Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should enter accountTitle\"J450A\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should enter description \"Saving\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should enter initialBalance\"10,563\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should enter accountNumber \"54875692\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should enter contactPerson\"James Brown\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should  enter Phone\"3148975694 \"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should enter accountTitle\"PlatinumPlus\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should enter internetBankingURL\"ChaseBank.com \"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User shoudl clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "LogininStepDefination.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 706673500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 24
    }
  ],
  "location": "LogininStepDefination.user_enter_Username(String)"
});
formatter.result({
  "duration": 119273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 24
    }
  ],
  "location": "LogininStepDefination.user_enter_Password_as(String)"
});
formatter.result({
  "duration": 62769600,
  "status": "passed"
});
formatter.match({
  "location": "LogininStepDefination.click_on_signin_button()"
});
formatter.result({
  "duration": 654229600,
  "status": "passed"
});
formatter.match({
  "location": "LogininStepDefination.user_should_land_on_the_Dashboard_Page()"
});
formatter.result({
  "duration": 10926000,
  "status": "passed"
});
formatter.match({
  "location": "LogininStepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 78854800,
  "status": "passed"
});
formatter.match({
  "location": "LogininStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 357447400,
  "status": "passed"
});
formatter.match({
  "location": "LogininStepDefination.user_should_land_on_the_Add_New_Account_Page()"
});
formatter.result({
  "duration": 36790500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J450A",
      "offset": 31
    }
  ],
  "location": "LogininStepDefination.user_should_enter_accountTitle(String)"
});
formatter.result({
  "duration": 93175900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saving",
      "offset": 31
    }
  ],
  "location": "LogininStepDefination.user_should_enter_description(String)"
});
formatter.result({
  "duration": 69408200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10,563",
      "offset": 33
    }
  ],
  "location": "LogininStepDefination.user_should_enter_initialBalance(String)"
});
formatter.result({
  "duration": 80087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54875692",
      "offset": 33
    }
  ],
  "location": "LogininStepDefination.user_should_enter_accountNumber(String)"
});
formatter.result({
  "duration": 73277300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Brown",
      "offset": 32
    }
  ],
  "location": "LogininStepDefination.user_should_enter_contactPerson(String)"
});
formatter.result({
  "duration": 79109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3148975694 ",
      "offset": 25
    }
  ],
  "location": "LogininStepDefination.user_should_enter_Phone(String)"
});
formatter.result({
  "duration": 78334900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlatinumPlus",
      "offset": 31
    }
  ],
  "location": "LogininStepDefination.user_should_enter_accountTitle(String)"
});
formatter.result({
  "duration": 89608000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChaseBank.com ",
      "offset": 37
    }
  ],
  "location": "LogininStepDefination.user_should_enter_internetBankingURL(String)"
});
formatter.result({
  "duration": 89427100,
  "status": "passed"
});
formatter.match({
  "location": "LogininStepDefination.user_shoudl_clicks_on_newAccount()"
});
formatter.result({
  "duration": 412891200,
  "status": "passed"
});
formatter.match({
  "location": "LogininStepDefination.user_should_be_able_to_validate_account_created_successfull()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
});