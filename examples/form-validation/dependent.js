function control() {
    document.getElementById("control").addEventListener("click", myFunction);
    var dependentClass = document.getElementsByClassName("dependent");
    for (i = 0; i < dependentClass.length; i++) {
        dependentClass[i].classList.add("disabled");
    }
    var dependentInput1 = document.getElementById("dependent1");
    var dependentInput2 = document.getElementById("dependent2");
    var dependentLabel1 = document.getElementById("depLabel1");
    var dependentLabel2 = document.getElementById("depLabel2");
    var control = document.getElementById("control");
    function myFunction() {
        if (dependentInput1.disabled === false || dependentInput2.disabled === false || control.checked === false) {
            dependentInput1.disabled = true;
            dependentInput2.disabled = true;
            dependentLabel1.classList.add("disabled");
            dependentLabel2.classList.add("disabled");
        } else {
            dependentInput1.disabled = false;
            dependentInput2.disabled = false;
            dependentLabel1.classList.remove("disabled");
            dependentLabel2.classList.remove("disabled");
        }
    }
}

    
var dependentClass = document.getElementsByClassName("dependent");
for (i = 0; i < dependentClass.length; i++) {
    dependentClass[i].classList.add("disabled");
}
var dependentInput1 = document.getElementById("comment");
var dependentInput2 = document.getElementById("password");
var dependentLabel1 = document.getElementById("depLabelComment");
var dependentLabel2 = document.getElementById("depLabelPassword");

function rateTeammate() {
    if (dependentInput1.disabled === false || dependentInput2.disabled === false) {
        dependentInput1.disabled = true;
        dependentInput2.disabled = true;
        dependentLabel1.classList.add("disabled");
        dependentLabel2.classList.add("disabled");
    } else {
        dependentInput1.disabled = false;
        dependentInput2.disabled = false;
        dependentLabel1.classList.remove("disabled");
        dependentLabel2.classList.remove("disabled");
    }
}
window.onload = function () {
    control();
};