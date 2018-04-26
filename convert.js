//4 seperate functions

//corrected code issues using console log
function fTom() {

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}
//inches to centimetres conversion 
//copied and pasted code and changed equations and /"qoutes/ for output assigned appropriately in html
function iToc() {

  var measure = parseInt(document.getElementById("value1").value);

  var cmeters = measure * 2.54;
  var message = measure + ' inches converts to ' + cmeters + ' centimetres.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}

//yards to miles conversion
function yTom() {

  var measure = parseInt(document.getElementById("value1").value);

  var ymeters = measure * 0.9144;
  var message = measure + ' Yards converts to ' + ymeters + ' metres.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
//miles to kilometres in a lapse of memory unable to place buttons beside each other
function mTok() {

  var measure = parseInt(document.getElementById("value1").value);

  var mkilolmeters = measure * 1.60934;
  var message = measure + ' Yards converts to ' + mkilolmeters + ' kilometres.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
