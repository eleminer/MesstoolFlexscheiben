var myVar;
myFunction();
function myFunction() {
  myVar = setInterval(alertFunc, 10);
}

function alertFunc() {
  document.getElementById("insertoutsektor").innerHTML = 20;
  document.getElementById("insertinsektor").innerHTML = 40;
}

function Bcounterclockwise() 
{
    document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(0deg)";
}

function Bclockwise()
{
    document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(180deg)";
}

function reset() 
{
    document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(90deg)";
    document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(90deg)";
}

function Wcounterclockwise() 
{

    document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(0deg)";
}

function Wclockwise()
{
    document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(180deg)";
}
