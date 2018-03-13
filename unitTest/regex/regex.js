// Regex 6
// #HHHHHH, #HHH, rgb(D,D,D), rgb(P%, P%, P%)

var extractColorNumber = (x) => {
    // does it accept a string of css specifier or the preceding and following included string ?
    rexHex = /(#[0-9a-f]{6}|#[0-9a-f]{3})/i;
    rexDec = /((rgb)\((\d*(\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b)[,\s]+){2,3}\s*\d*(\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b)+\))/i;
    rexPer = /(rgb)\((\d*(\b([0-9]|[0-9][0-9]|100)\b)+%[,\s]+){2,3}\s+\d*(\b([0-9]|[0-9][0-9]|100)\b)+%?\)/i;
    if (rexHex.test(x) === true) {
        var hex = x.match(rexHex);
        return hexToHex(hex[0])
    } else if (rexDec.test(x) === true) {
        var dec = x.match(rexDec);
        return rgbToHex(dec)
    } else if (rexPer.test(x) === true) {
        var per = x.match(rexPer);
        return rgbpToHex(per)
    } else {
        return null
    }

    // rewrite hex to hex6
    function hexToHex(hexString) {
        // validate hex
        if (hexString.length < 6 ) {
            // make it 6 by double it
            strArr = hexString.split('')
            return `#${strArr[1]}${strArr[1]}${strArr[2]}${strArr[2]}${strArr[3]}${strArr[3]}`
        } else {
            return hexString;
        }
    }

    // convert rgb number to hexa

    function rgbToHex(rgbString) {
        // get num
        var decArray = rgbString[0].match(/\d{1,3}/g)
        // write hexa
        return "#" + ((1 << 24) + (Number(decArray[0]) << 16) + (Number(decArray[1]) << 8) + Number(decArray[2])).toString(16).slice(1);
    }

    // convert rgb percent to hexa

    function rgbpToHex(rgbString) {
        decArray = rgbString[0].match(/\d{1,3}/g)
        newDec = []
        for (i = 0; i < decArray.length; i++) {
            newDec.push(Math.ceil(decArray[i] * 255 / 100)) // ASK
        }
        return "#" + ((1 << 24) + (newDec[0] << 16) + (newDec[1] << 8) + (newDec[2])).toString(16).slice(1);
    }
};


console.log(extractColorNumber('hello this is css spec #F2F xxx #ff00ff #fff'))
console.log(extractColorNumber('#ff00ff'))
console.log(extractColorNumber('rgb(1%, 100%, 90%)'))
console.log(extractColorNumber('rgb(3,255,230)'))
console.log(extractColorNumber('#ff22cc'))
console.log(extractColorNumber('rgb(1, 100, 256)'))
console.log(extractColorNumber('RGB(101%, 100%, 10%)'))
console.log(extractColorNumber(' ma li pu RGB(3%, 22%, 19%)'))
console.log(extractColorNumber(' RGB(3%, 22%, 19%) '))