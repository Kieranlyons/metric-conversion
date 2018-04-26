function fToM();

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure x 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.flag(message);
  doc.getElementbyId("resultsentence").innerHTML = message;

)