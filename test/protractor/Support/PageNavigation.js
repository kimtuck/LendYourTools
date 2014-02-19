NavigateToShopPage = function() {
    element(by.xpath("//a[contains(.,'Shop')]")).click();
    expect(browser.getCurrentUrl()).toBe("https://catdev.3m.com/layout/index.html#/shop")
}
