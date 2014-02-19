CollectionPage = function() {
    this.PageName="CollectionPage",
    this.get = function() {
        browser.get('https://catdev.3m.com/layout/index.html#/collection');
    };

    this.SelectOption1 = function() {
        SelectOption1();
    };

    // buttons
    this.ClearButton = mmm.ClearButton();

    // Date selectors
    this.publishedWithin = mmm.publishedWithin;
    this.dateAddedToCatalog = mmm.dateAddedToCatalog;
    this.ebookPurchasedDate = mmm.ebookPurchasedDate;

    this.publishedWithin.page = this;
    this.dateAddedToCatalog.page = this;
    this.ebookPurchasedDate.page = this;

};
