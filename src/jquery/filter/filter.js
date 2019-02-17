function init() {
    $("li").filter(":even").css("background-color", "green");
    $("li").filter(":odd").css("color", "red");
    $("li")
        .filter(function (i) {
            // console.log(this, i, k);
            return $("strong", this).length === 1;
        })
        .css("background-color", "yellow");
    $("li")
        .filter(function (index) {
            return index % 3 === 2;
        })
        .css("background-color", "blue");
}

$(init);