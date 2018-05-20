
function telephoneCheck(str) {
  //string together a test using regular expressions
  var regularex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
  //use the test method to test our str input against our regular expression
  return regularex.test(str);
}



telephoneCheck("555-555-5555");
