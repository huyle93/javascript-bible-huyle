// Regex 6
// #HHHHHH, #HHH, rgb(D,D,D), rgb(P%, P%, P%)

var extractColorNumber = (x) => {
    rexHex = /(#[0-9a-f]{6}|#[0-9a-f]{3})$/i
    rexDec = /((rgb)\((\d*(\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b)[,\s]+){2,3}\s*\d*(\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b)+\))/i
    rexPer = /(rgb)\((\d*(\b([0-9]|[0-9][0-9]|100)\b)+%[,\s]+){2,3}\s+\d*(\b([0-9]|[0-9][0-9]|100)\b)+%?\)$/i
    if (rexHex.test(x) === true) {
      var hex = x.match(rexHex);
      return 'hex: '+hex[0]
    } else if (rexDec.test(x) === true) {
      var dec = x.match(rexDec);
      return 'dec: '+dec[0]+' hex: '+rgbToHex(dec)
    } else if (rexPer.test(x) === true) {
      var per = x.match(rexPer);
      return 'per: '+per[0]+' hex: '+rgbpToHex(per)
    } else {
      return null
    }
    function rgbToHex(rgbString) {
      // get num
      var decArray = rgbString[0].match(/\d{1,3}/g)
      // write hexa
      return "#" + ((1 << 24) + (Number(decArray[0]) << 16) + (Number(decArray[1]) << 8) + Number(decArray[2])).toString(16).slice(1);
    }
    function rgbpToHex(rgbString) {
      decArray = rgbString[0].match(/\d{1,3}/g)
      newDec = []
      for (i=0; i < decArray.length; i++) {
        newDec.push(Math.ceil(decArray[i]*255/100))
      }
      return "#" + ((1 << 24) + (newDec[0] << 16) + (newDec[1] << 8) + (newDec[2])).toString(16).slice(1);
    }
  };
  
  console.log(extractColorNumber('#FFF')) // true
  console.log(extractColorNumber('#ff00ff')) // true
  console.log(extractColorNumber('rgb(1%, 100%, 90%)')) // true
  console.log(extractColorNumber('rgb(3,255,230)')) // true
  console.log(extractColorNumber('#FFFF')) // false
  console.log(extractColorNumber('rgb(1, 100, 256)')) // false
  console.log(extractColorNumber('RGB(101%, 100%, 10%)')) // false