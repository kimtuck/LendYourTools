ddescribe('Date Range Validation', function() {

    xit('demonstrates using', function() {
        using('valid dates',[DateHelper.Today(), DateHelper.BeforeToday(1), DateHelper.BeforeToday(2)],function(value) {
            fromDate.typeDate(value);
            expect(fromDate.tooltip.getText()).toBe("");
        } )
    })

    using('valid dates',[
        { page: ShopPage, field: "publishedWithin" },
        { page: ShopPage, field: "dateAddedToCatalog" },
        { page: CollectionPage, field: "publishedWithin" },
        { page: CollectionPage, field: "dateAddedToCatalog" },
        { page: CollectionPage, field: "ebookPurchasedDate" }
    ],function(value) {

        var shopPage = new (value.page)();
        var dateSelector = shopPage[value.field];
        var name=dateSelector.page.PageName +': ' + dateSelector.name + ': '
        var fromDate = dateSelector.fromDate;
        var thruDate=dateSelector.thruDate;

        function init(shopPage,dateSelector) {
            Login();
            shopPage.get();
            dateSelector.SelectCustomDateRange();
        };

        it(name + 'Valid date range', function() {
            init(shopPage,dateSelector);
            fromDate.typeDate(DateHelper.Today());
            thruDate.typeDate(DateHelper.Today());
            expect(fromDate.tooltip.getText()).toBe("");
            expect(thruDate.tooltip.getText()).toBe("");
        });

        iit(name + 'From Date after todays date: From Date invalid, reset=no tooltip', function() {
            init(shopPage,dateSelector);
            expect(fromDate.tooltip.getText()).toBe("");
            fromDate.typeDate(DateHelper.Tomorrow());
            expect(fromDate.hasTooltipWithText("Select a date on or before today's date")).toBe(true);
            shopPage.clearButton.click();
            expect(fromDate.hasHiddenTooltip()).toBe(true);

        });

        it(name + 'From Date after todays date: From Date invalid', function() {
            init(shopPage,dateSelector);
            expect(fromDate.tooltip.getText()).toBe("");
            fromDate.typeDate(DateHelper.Tomorrow());
            expect(fromDate.hasTooltipWithText("Select a date on or before today's date")).toBe(true);
        });

        it(name + 'Thru Date after todays date: Thru Date invalid', function() {
            init(shopPage,dateSelector);
            expect(thruDate.tooltip.getText()).toBe("");
            thruDate.typeDate(DateHelper.Tomorrow());
            expect(thruDate.hasTooltipWithText("Select a date on or before today's date")).toBe(true);
        });

        it(name + 'Valid from date, Thru before From, then thru date has a tooltip', function() {
            init(shopPage,dateSelector);
            fromDate.typeDate(DateHelper.BeforeToday(1));
            thruDate.typeDate(DateHelper.BeforeToday(2));
            expect(fromDate.hasHiddenTooltip()).toBe(true);
            expect(thruDate.hasTooltipWithText("Date to must be on or after date from")).toBe(true);
        });

        it(name + 'Valid from date, Valid thru date; then thru after from, then from date has a tooltip', function() {
            init(shopPage,dateSelector);
            fromDate.typeDate(DateHelper.BeforeToday(4));
            thruDate.typeDate(DateHelper.BeforeToday(3));
            expect(fromDate.hasHiddenTooltip()).toBe(true);
            expect(thruDate.hasHiddenTooltip()).toBe(true);

            fromDate.typeDate(DateHelper.BeforeToday(2));
            expect(fromDate.hasTooltipWithText("Date from must be on or before date to")).toBe(true);
            expect(thruDate.hasHiddenTooltip()).toBe(true);
        });

        // Broken (jira 2228) -- does not reset the "from" tooltip when "to" is changed to make condition correct
        xit(name + 'From after Thru, then fix From; all tooltips disappear', function() {
            init(shopPage,dateSelector);
            fromDate.typeDate(DateHelper.BeforeToday(1));
            thruDate.typeDate(DateHelper.BeforeToday(2));
            expect(fromDate.hasHiddenTooltip()).toBe(true);
            expect(thruDate.hasTooltipWithText("Date to must be on or after date from")).toBe(true);

            fromDate.typeDate(DateHelper.BeforeToday(3));

            expect(fromDate.hasHiddenTooltip()).toBe(true);
            expect(thruDate.hasHiddenTooltip()).toBe(true);
        });

        it(name + 'From,Thru are invalid, then choose a non-custom dropdown value, the tooltips disappear.', function() {
            init(shopPage,dateSelector);
            fromDate.typeDate(DateHelper.Tomorrow());
            thruDate.typeDate(DateHelper.Tomorrow());
            expect(fromDate.hasTooltipWithText("Select a date on or before today's date")).toBe(true);
            expect(thruDate.hasTooltipWithText("Select a date on or before today's date")).toBe(true);

            dateSelector.SelectOption1();

            expect(fromDate.hasHiddenTooltip()).toBe(true);
            expect(thruDate.hasHiddenTooltip()).toBe(true);
        });

        it(name + 'invalid purchase dates, search and save buttons are disabled (Jira 2128)', function() {
            init(shopPage,dateSelector);
            fromDate.typeDate(DateHelper.Today());
            thruDate.typeDate(DateHelper.Today());
            expect(element(by.tagWithText("button"," Update Results")).isEnabled()).toBe(true);

            fromDate.typeDate(DateHelper.Tomorrow());
            thruDate.typeDate(DateHelper.Tomorrow());
            expect(element(by.tagWithText("button"," Update Results")).isEnabled()).toBe(false);

            fromDate.typeDate(DateHelper.Today());
            thruDate.typeDate(DateHelper.Today());
            expect(element(by.tagWithText("button"," Update Results")).isEnabled()).toBe(true);

        });
    });
});
