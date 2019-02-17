function formControl() {
    // getting input value
    var input = document.getElementById("input");
    var myForm = document.getElementById("myForm");
    document.querySelector('#start').addEventListener("click", start);
    document.querySelector('#cancel').addEventListener("click", cancel);
    document.querySelector('#pause').addEventListener("click", pause);
    // regex validate
    var containInt = /^-?[0-9]\d*$/;
    // ======== UI text ========
    var posint_err = "It must contain only an integer greater than 0";
    var expiredMsg = "expired";
    var pauseMsg = "PAUSED";
    var errorMsg = "Error";

    function render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.value = content;
    }
    // Select All function
    function selectAll() {
        var input = document.getElementById("input");
        input.focus();
        input.setSelectionRange(0, input.value.length);
    }
    // UI state
    const state = {
        originalValue: "",
        defaultValue: "",
        currentValue: "",
        failed() {
            document.getElementById("warning").classList.add("invalid");
            document.getElementById("alert").innerHTML = errorMsg;
            document.getElementById("posint_err").innerHTML = posint_err;
            document.getElementById("posint_err").style.display = "block";
        },
        success() {
            document.getElementById("errormsgs").style.display = "none";
        },
        start() {
            document.getElementById("alert").style.display = "none";
            document.getElementById("posint_err").style.display = "none";
        },
        paused() {
            document.getElementById("alert").innerHTML = pauseMsg;
            document.getElementById("errormsgs").style.display = "block";
            document.getElementById("alert").style.display = "block";
            document.getElementById("posint_err").style.display = "none";
        }
    }
    // start function
    function start(e) {
        e.preventDefault();
        if (!(state.currentValue == "")) {
            var inputValue = parseInt(state.currentValue)
            console.log('not empty')
        } else {
            var inputValue = parseInt(document.getElementById("input").value);
            state.originalValue = inputValue;
            console.log('empty')
        }
        if (parseInt(document.getElementById("input").value) <= 0 || (!(document.getElementById("input").value.match(containInt)))) {
            state.failed();
            selectAll();
            // e.preventDefault();
            // e.stopImmediatePropagation();
            console.log('start failed')
        } else {
            // success case
            state.start();
            state.defaultValue = inputValue;
            state.success();
            input = setInterval(countdown, 1000);
            // Countdown function()
            function countdown() {
                inputValue--;
                render(document.getElementById("input"), inputValue)
                if (inputValue <= 0) {
                    clearInterval(input);
                    render(document.getElementById("input"), expiredMsg)
                }
            }
        }
        return false
    }
    // cancel function
    function cancel(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        clearInterval(input);
        render(document.getElementById("input"), state.originalValue);
        selectAll();
        state.start();
        return false
    }
    // cancel function
    function pause(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        clearInterval(input);
        currentValue = document.getElementById("input").value;
        render(document.getElementById("input"), currentValue);
        state.currentValue = currentValue;
        state.paused();
        return false
    }
}
window.onload = function () {
    formControl();
};