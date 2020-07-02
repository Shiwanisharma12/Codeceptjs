const kekaPage = require('codecept-tests/pages/kekaPage.js');

Given(/^User is on keke page$/, function ()
{
   kekaPage.navigatetourl();
});
// When(/^User wil select login with keka password option$/, function () {
//
// });
// When(/^User will enter login credentials and loginto the application$/, function () {
//
// });
// Then(/^user will click on monthwise tabs to see attandance$/, function () {
//
// });
// Then(/^User will logout from the application$/, function () {
//
// });