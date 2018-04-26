function fTom() {

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}