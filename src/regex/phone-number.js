// Regex Finished

var isPhone = (num) => {
    return (/^\(?\d{3}[)-. ]? ?\d{3}[-. ]?\d{4}$/).test(num);
  };
  
  var containsPhone = (num) => {
    return (/\(?\d{3}[)-. ]? ?\d{3}[-. ]?\d{4}/).test(num);
  };
  
  var extractPhone = (num) => {
    re = /\(?\d{3}[)-. ]? ?\d{3}[-. ]?\d{4}/
    if ((re).test(num) === true) {
      // get the phone number only
      var extractedStr = num.match(re);
      // remove signs
      result = extractedStr[0].replace(/[^\d]/g, "");
      // return correctted format
      return result.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    } else {
      return null;
    }
  }
  
  console.log(isPhone('(603)862-2506')); // true
  console.log(isPhone('(603)862-mike')); // false
  console.log(isPhone('this is cell (603)862-2506')); // false
  console.log(containsPhone('is it your number 603-862-2506 ?')); // true
  console.log(extractPhone('is it your number 603 862 6200 ?')); // "(603) 862-6200"
  console.log(extractPhone('is it your number 603 862 6x00 ?')); // null
  console.log(extractPhone('603 862 6200'));