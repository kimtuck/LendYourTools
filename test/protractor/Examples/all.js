function allExample() {
    var tooltip = element.all(by.css(".tooltip-inner"));
    expect(tooltip.count()).toBe(4);
    expect(tooltip.get(0).getText()).toBe('');
}
