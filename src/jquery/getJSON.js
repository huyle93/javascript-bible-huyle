$.getJSON("./data.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
    });
    console.log(items)
    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
});

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
const url = "./data.json";
var jqxhr = $.getJSON(url, function () {
        console.log("success");
    })
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("execution complete");
    });