/* global */
by.tagWithText = function (tag,text) {
    return by.xpath("//" + tag + "[contains(.,'" + text + "')]")
}
by.buttonWithText = function (text) {
    return by.tagWithText("button",text)
}

GetParentElement = function(elem) // returns element
{
    if (elem == null) return null;
    return elem.findElement(by.xpath(".."));
}

