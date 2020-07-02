const page = require('../../pages/kekaPage');

Given(/^user is on keka login page$/, function () {

    page.navigatetourl();

});
When(/^user select login with keka password$/, function () {
    page.loginWithkekapwd();

});
When(/^User enters login credentials and hit submit$/, function () {
    page.email("shiwani.sharma@successive.tech");
    page.pwd("Shiwani@123");
    page.login();

});
Then(/^user will be logged in and see monthwise attendance by clicking on each tab$/, function () {
    page.attendance();
    page.monthWise();

});
Then(/^user will be logged out$/, function ()
{
    page.dropdown();
    page.logout();

});
Given(/^user will visit all the tabs and verify each tab$/, function () {
    page.Alllefttabs();

});