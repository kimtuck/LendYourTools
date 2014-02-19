mmm={}
mmm.publishedWithin = {
    page: this,
    name: "Published Within",

    dropdown: element(by.model("FilterCriteriaService.criteria.daysAgo")),
    fromDate: mmmDatePickerElements("pubDateFrom"),
    thruDate: mmmDatePickerElements("pubDateTo"),

    SelectCustomDateRange: function() {
        SelectDropdownOption(this.dropdown,5);
    },
    SelectOption1: function() {
        SelectDropdownOption(this.dropdown,1);
    }
};

mmm.dateAddedToCatalog = {
    page: this,
    name: "DateAddedToCatalog",

    dropdown: element(by.model("FilterCriteriaService.criteria.addedDaysAgo")),
    fromDate: mmmDatePickerElements("addDateFrom"),
    thruDate: mmmDatePickerElements("addDateTo"),

    SelectCustomDateRange: function() {
        SelectDropdownOption(this.dropdown,6);
    },
    SelectOption1: function() {
        SelectDropdownOption(this.dropdown,1);
    }
};

mmm.ebookPurchasedDate = {
    page: this,
    name: "EbookPurchasedDate",

    dropdown: element(by.model("FilterCriteriaService.criteria.purchasedDaysAgo")),
    fromDate: mmmDatePickerElements("purchaseDateFrom"),
    thruDate: mmmDatePickerElements("purchaseDateTo"),

    SelectCustomDateRange: function() {
        SelectDropdownOption(this.dropdown,2);
    },
    SelectOption1: function() {
        SelectDropdownOption(this.dropdown,1);
    }
};

mmm.ClearButton = element(by.button("Clear All"));

