// get all a tag's urls
var allUrls = document.getElementsByTagName('a');
var menuitemUrls = document.querySelectorAll('[role=menuitem]');
var allhref = [];
var menuhref = [];
// build array 1
for(var i = 0; i < allUrls.length; i++){
    allhref.push(allUrls[i].href);
}
// build array 2
for(var i = 0; i < menuitemUrls.length; i++){
    menuhref.push(menuitemUrls[i].href)
}
// function that take array 1 and 2, return the array without menuitem href
var buildFinalArray = (arr1, arr2) => {
    var returnArray = [];
    var diffArray = [];
    // Find the difference of 2 arrays
    Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };
    // return differences into an array
    diffArray = allhref.diff( menuhref );
    returnArray = returnArray.concat(diffArray)
    return returnArray;
};
// Print results
var finalResult = buildFinalArray(allhref, menuhref);

window.onload = myFunction();

// set up when loaded
function myFunction () {
    for(var i = 0; i < finalResult.length; i++){
        var elem = document.createElement('span');
        var textnode = document.createTextNode(` (${finalResult[i]})`);
        elem.appendChild(textnode);
        elem.style.display = "none";
        elem.classList.add("mystyle");
        allUrls[i].appendChild(elem);
    }
    var button = document.getElementsByTagName('button');
    button[0].innerHTML = 'SHOW URLS';

}

// toggle 
function toggle() {
    var x = document.getElementsByClassName("mystyle");
    var button = document.getElementsByTagName('button');
    for (var n=0;n<x.length;n+=1){
        if (x[n].style.display === "none") {
            x[n].style.display = "inline-block";
            console.log(x[n].style.display);
        }
        else if (x[n].style.display === "inline-block") {
            x[n].style.display = "none";
            console.log(x[n].style.display);
        }
    }
    if (button[0].innerHTML === 'SHOW URLS') {
        button[0].innerHTML = 'HIDE URLS';
    } else {
        button[0].innerHTML = 'SHOW URLS';
    }
}
