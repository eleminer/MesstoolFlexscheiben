
var myVar;
myFunction();

function myFunction() {
    myVar = setInterval(alertFunc, 10);
}

function alertFunc() {

    document.getElementById("durationInputFieldIN").innerHTML = 0;
    document.getElementById("durationInputFieldOUT").innerHTML = 0;
    document.getElementById("insertinsektor").innerHTML = 0;
    document.getElementById("insertoutsektor").innerHTML = 0;
    document.getElementById("insertinsektorpredict").innerHTML = 0;
    document.getElementById("insertoutsektorpredict").innerHTML = 0;
}