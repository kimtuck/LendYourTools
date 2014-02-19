protractor.mmm = protractor.mmm || {};
Login = function() {

    browser.driver.get('https://catdev.3m.com');

    browser.driver.getCurrentUrl().then (function(url) {
        if (url.indexOf('extra3') > -1) {
            //if (browser.driver.isElementPresent(by.name('passwd')))
            browser.driver.findElement(by.name('userName')).sendKeys('a477mzz');
            browser.driver.findElement(by.name('passwd')).sendKeys('Treasure2013');
            browser.driver.findElement(by.name('login')).click();
            browser.get('https://catdev.3m.com');
            browser.waitForAngular();
        }
    });

    // this is an angular page
    var loginForm = element(by.name('LoginForm'));
    expect(browser.isElementPresent(by.name('LoginForm'))).toBe(true);

    browser.findElement(by.name('username')).sendKeys('robert.hanson@solutiondesign.com');
    browser.findElement(by.name('password')).sendKeys('Treasure2012');

    expect(browser.isElementPresent(by.xpath("//button[contains(.,'Login')]"))).toBe(true);
    browser.findElement(by.xpath("//button[contains(.,'Login')]")).click();
    browser.waitForAngular();

};