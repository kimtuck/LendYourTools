describe('angularjs homepage', function() {

    beforeEach(function() {
        Login();
        return;
    });

    it('should log in the user', function() {
          expect(browser.getCurrentUrl()).toBe("https://catdev.3m.com/layout/index.html#/landing")
    });
});
