//4 seperate functions

//corrected code issues using console log// tried swapping alert tags around but still no change in output
function fTom() {

  var measure = parseInt(document.getElementById("value1").value);
  
     if(measure<=0.1){
    alert("Values must be greater than 0");
  } else if(!measure){
    alert("Please enter a value");
 }
  else{

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
  }
}
//inches to centimetres conversion 
//copied and pasted code and changed equations and /"qoutes/ for output assigned appropriately in html
function iToc() {

  var measure = parseInt(document.getElementById("value1").value);
   if(!measure){
    alert("Please input a value !");
  } else if(measure<0.1){
    alert("Values entered must be greater than zero !");
 }
  else{

  var cmeters = measure * 2.54;
  var message = measure + ' inches converts to ' + cmeters + ' centimetres.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
}

//yards to metres conversion , cannot get else if statement running correctly 
function yTom() {
	
	var measure = parseInt(document.getElementById("value1").value);
	if(!measure){
    alert("Please input a value !");
  } else if(measure<001){
    alert("Values entered must be greater than zero !");
 }
  else{
  
  var ymeters = measure * 0.9144;
  var message = measure + ' Yards converts to ' + ymeters + ' metres.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
}
//miles to kilometres in a lapse of memory unable to place buttons beside each other
function mTok() {

  var measure = parseInt(document.getElementById("value1").value);
   if(!measure){
	  alert("Please input a value!");
  } else if (measure<0.1){
	  alert("values must be greater than 0");
  }  
   else{
  var mkilolmeters = measure * 1.60934;
  var message = measure + ' Miles converts to ' + mkilolmeters + ' kilometres.';


  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
}