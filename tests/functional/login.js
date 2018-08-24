//TODO: move this to a constants file
const sauce = require('../utils/sauce');

module.exports = {
    'Login': function (browser) {
        var baseUrl = 'https://qa-comm-web.idexxcomm.com';
        var pageTitle = '.signup-leftColumn-content-main-title';
        var loginButton = '.spot-button.spot-button--primary';
        var commsPageHeader = '.mainContent-header-name';
        //TODO: move creds to a constants file
        var userName = 'test@test.com';
        var password = 'idexx123';

        browser
            .url(baseUrl)
            .assert.title('IDEXX Communicator')
            .verify.containsText(pageTitle, 'Login')
        //enter user/pw
            .setValue('input:first-child', userName)
            .setValue('input[type=password]', password)
            //click login button after entering user/pw
            .verify.containsText(loginButton, 'Login')
            .click(loginButton)
            //verify login submit lands on Control Center
            .verify.urlEquals(baseUrl + '/communications')
            .verify.containsText(commsPageHeader, 'Communication')
            .end();
    },
    tearDown: sauce,
};