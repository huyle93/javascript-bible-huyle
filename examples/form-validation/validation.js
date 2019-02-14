function formValidate() {
    // getting input value
    var requiredInput = document.getElementById("required");
    var intInput = document.getElementById("int");
    var posintInput = document.getElementById("posint");
    var numericInput = document.getElementById("numeric");
    var zipInput = document.getElementById("zip");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var verifyInput = document.getElementById("verify");
    // button
    document.getElementById("myForm").addEventListener("submit", validate);
    // check required input
    // Validate at least non-whitespace char
    function validate(e) {
        var whiteSpace = /\s/;
        var containInt = /^-?[0-9]\d*$/;
        var containNumeric = /^-?\d*\.{0,1}\d+$/;
        var containZip = /^\d{5}(?:[-\s]\d{4})?$/;
        var containPhone = /^\(?\d{3}[)-. ]? ?\d{3}[-. ]?\d{4}$/;
        var containEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}/;
        // error text
        var required_err = "Required must contain at least one non-whitespace character"
        var int_err = "Int must contain only an positive or negative interger"
        var posint_err = "Posint must contain only an integer greater than 0"
        var numeric_err = "Numeric must contain only a numeric value, which may be an integer or a floating point value and either positive or negative (scientific notation and bases other than 10 need not be supported)"
        var zip_err = "Zip must contain only a U.S. postal Zip code, with or without the Zip+4 extension"
        var phone_err = "Phone must contain only a phone number in one of the following acceptable formats: XXXXXXXXXX, XXX-XXX-XXXX, XXX XXX XXXX, (XXX) XXX-XXXX, and (XXX)XXX-XXXX"
        var email_err = "Email must contain only an e-mail address which contains one (and only one) @ symbol with non-whitespace characters before and after it and at least one period (surrounded by non-whitespace characters) in the portion following the @ symbol. (Note that you are not responsible for verifying that it is an actual working e-mail address!)"
        var verify_err = "It does not match, try again."
        // check int input
        document.getElementById("warning").classList.add("invalid");
        if (requiredInput.value.length < 1) {
            console.log("empty input");
            document.getElementById("required_err").innerHTML = required_err;
            e.preventDefault();
            return false
        } else if (requiredInput.value.match(whiteSpace)) {
            console.log('there is whitespace');
            clear()
            document.getElementById("required_err").innerHTML = required_err;
            document.getElementById("required_err").style.display = "block";
            e.preventDefault();
            return false
        } else if (!(intInput.value.match(containInt))) {
            console.log('there is no interger')
            clear()
            document.getElementById("int_err").innerHTML = int_err;
            document.getElementById("int_err").style.display = "block";
            e.preventDefault();
            return false
        } else if (parseInt(posintInput.value) <= 0 || (!(posintInput.value.match(containInt)))) {
            // check posint input
            // Validate must contain only an integer greater than 0
            clear()
            document.getElementById("posint_err").innerHTML = posint_err;
            document.getElementById("posint_err").style.display = "block";
            e.preventDefault();
            return false
        } else if (!(numericInput.value.match(containNumeric))) {
            clear()
            document.getElementById("numeric_err").innerHTML = numeric_err;
            document.getElementById("numeric_err").style.display = "block";
            e.preventDefault();
        } else if (!(zipInput.value.match(containZip))) {
            clear()
            document.getElementById("zip_err").innerHTML = zip_err;
            document.getElementById("zip_err").style.display = "block";
            e.preventDefault();
        } else if (!(phoneInput.value.match(containPhone))) {
            clear()
            document.getElementById("phone_err").innerHTML = phone_err;
            document.getElementById("phone_err").style.display = "block";
            e.preventDefault();
        } else if (!(emailInput.value.match(containEmail))) {
            clear()
            document.getElementById("email_err").innerHTML = email_err;
            document.getElementById("email_err").style.display = "block";
            e.preventDefault();
        } else if (emailInput.value !== verifyInput.value) {
            clear()
            document.getElementById("verify_err").innerHTML = verify_err;
            document.getElementById("verify_err").style.display = "block";
            e.preventDefault();
        } else {
            document.getElementById("errormsgs").style.display = "none";
        }
        // clean up checklist
        function clear() {
            document.getElementById("required_err").style.display = "none";
            document.getElementById("int_err").style.display = "none";
            document.getElementById("posint_err").style.display = "none";
            document.getElementById("numeric_err").style.display = "none";
            document.getElementById("zip_err").style.display = "none";
            document.getElementById("phone_err").style.display = "none";
            document.getElementById("email_err").style.display = "none";
        }
    }
}
// form 2
function formValidate2() {
    // getting input value
    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var posnumInput = document.getElementById("posnum");
    var anynumInput = document.getElementById("anynum");
    var zipcodeInput = document.getElementById("zipcode");
    var phonenumInput = document.getElementById("phonenum");
    var email2Input = document.getElementById("email2");
    var verifyEmail2Input = document.getElementById("verifyEmail2");
    // button
    document.getElementById("myForm2").addEventListener("submit", validate);
    // check required input
    // Validate at least non-whitespace char
    function validate(e) {
        var whiteSpace = /\s/;
        var containInt = /^-?[0-9]\d*$/;
        var containNumeric = /^-?\d*\.{0,1}\d+$/;
        var containZip = /^\d{5}(?:[-\s]\d{4})?$/;
        var containPhone = /^\(?\d{3}[)-. ]? ?\d{3}[-. ]?\d{4}$/;
        var containEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}/;
        // error text
        var err1 = "Required must contain at least one non-whitespace character"
        var err2 = "Int must contain only an positive or negative interger"
        var err3 = "Posint must contain only an integer greater than 0"
        var err4 = "Numeric must contain only a numeric value, which may be an integer or a floating point value and either positive or negative (scientific notation and bases other than 10 need not be supported)"
        var err5 = "Zip must contain only a U.S. postal Zip code, with or without the Zip+4 extension"
        var err6 = "Phone must contain only a phone number in one of the following acceptable formats: XXXXXXXXXX, XXX-XXX-XXXX, XXX XXX XXXX, (XXX) XXX-XXXX, and (XXX)XXX-XXXX"
        var err7 = "Email must contain only an e-mail address which contains one (and only one) @ symbol with non-whitespace characters before and after it and at least one period (surrounded by non-whitespace characters) in the portion following the @ symbol. (Note that you are not responsible for verifying that it is an actual working e-mail address!)"
        var err8 = "It does not match, try again."
        // check int input
        document.getElementById("warning2").classList.add("invalid");
        if (nameInput.value.length < 1) {
            console.log("empty input");
            document.getElementById("err1").innerHTML = err1;
            e.preventDefault();
            return false
        } else if (nameInput.value.match(whiteSpace)) {
            console.log('there is whitespace');
            clear()
            document.getElementById("err1").innerHTML = err1;
            document.getElementById("err1").style.display = "block";
            e.preventDefault();
            return false
        } else if (!(ageInput.value.match(containInt))) {
            console.log('there is no interger')
            clear()
            document.getElementById("err2").innerHTML = err2;
            document.getElementById("err2").style.display = "block";
            e.preventDefault();
            return false
        } else if (parseInt(posnumInput.value) <= 0 || (!(posnumInput.value.match(containInt)))) {
            // check posint input
            // Validate must contain only an integer greater than 0
            clear()
            document.getElementById("err3").innerHTML = err3;
            document.getElementById("err3").style.display = "block";
            e.preventDefault();
            return false
        } else if (!(anynumInput.value.match(containNumeric))) {
            clear()
            document.getElementById("err4").innerHTML = err4;
            document.getElementById("err4").style.display = "block";
            e.preventDefault();
        } else if (!(zipcodeInput.value.match(containZip))) {
            clear()
            document.getElementById("err5").innerHTML = err5;
            document.getElementById("err5").style.display = "block";
            e.preventDefault();
        } else if (!(phonenumInput.value.match(containPhone))) {
            clear()
            document.getElementById("err6").innerHTML = err6;
            document.getElementById("err6").style.display = "block";
            e.preventDefault();
        } else if (!(email2Input.value.match(containEmail))) {
            clear()
            document.getElementById("err7").innerHTML = err7;
            document.getElementById("err7").style.display = "block";
            e.preventDefault();
        } else if (email2Input.value !== verifyEmail2Input.value) {
            clear()
            document.getElementById("err8").innerHTML = err8;
            document.getElementById("err8").style.display = "block";
            e.preventDefault();
        } else {
            document.getElementById("errormsgs2").style.display = "none";
        }
        // clean up checklist
        function clear() {
            document.getElementById("err1").style.display = "none";
            document.getElementById("err2").style.display = "none";
            document.getElementById("err3").style.display = "none";
            document.getElementById("err4").style.display = "none";
            document.getElementById("err5").style.display = "none";
            document.getElementById("err6").style.display = "none";
            document.getElementById("err7").style.display = "none";
        }
    }
}
window.onload = function(){
    formValidate();
    formValidate2();
};