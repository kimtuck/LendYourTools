ShopPage = function() {
    this.PageName="ShopPage",
    this.get = function() {
        browser.get('https://catdev.3m.com/layout/index.html#/shop');
    };

    this.SelectOption1 = function() {
        SelectOption1();
    };

    // buttons
    this.ClearButton = mmm.ClearButton();

    // Date selectors
    this.publishedWithin = mmm.publishedWithin;
    this.dateAddedToCatalog = mmm.dateAddedToCatalog;

    this.publishedWithin.page=this;
    this.dateAddedToCatalog.page=this;



};
