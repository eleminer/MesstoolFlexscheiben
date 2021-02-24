var myVar;
var degW=0;
var degB=0;
var bclockwise=0;
var bcounterclockwise=0;
var wclockwise=0;
var wcounterclockwise=0;
var resetvar=0;
var positionOUT=90;
var positionIN=90;
/*
W=document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(0deg)";
B=document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(0deg)";
*/
myFunction();
function myFunction() {
  myVar = setInterval(alertFunc, 1);
}

function alertFunc() {
  if(bclockwise==1)
  {
    document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate("+positionOUT+"deg)";
    positionOUT=positionOUT+1;
  }

  if(bcounterclockwise==1)
  {
    document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate("+positionOUT+"deg)";
    positionOUT=positionOUT-1;
  }
  if(wclockwise==1)
  {
    document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate("+positionIN+"deg)";
    positionIN=positionIN+1;
  }

  if(wcounterclockwise==1)
  {
    document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate("+positionIN+"deg)";
    positionIN=positionIN-1;
  }
  
  var outsektormath=((positionOUT%360)/(360/111));
  if (outsektormath>=((90%360)/(360/111)))
  {
outsektormath=outsektormath-((90%360)/(360/111));
  }
  else
  {
    outsektormath=Math.abs(outsektormath)+3*(((90%360)/(360/111)));
  }
  var insektormath=((positionIN%360)/(360/111));
  if (insektormath>=((90%360)/(360/111)))
  {
insektormath=insektormath-((90%360)/(360/111));
  }
  else
  {
    insektormath=Math.abs(insektormath)+3*(((90%360)/(360/111)));
  }

  document.getElementById("insertoutsektor").innerHTML = Math.round(outsektormath+0.5);
  console.log(Math.round(outsektormath+0.5));
  document.getElementById("insertinsektor").innerHTML = Math.round(insektormath+0.5);;




  if(resetvar==1)
  {
    positionOUT=90;
    positionIN=90;
    document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(90deg)";
    document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(90deg)";
    resetvar=0; wclockwise=0; wcounterclockwise=0; bclockwise=0;bcounterclockwise=0;

  }
}

function Bcounterclockwise() 
{
bcounterclockwise=1;
}

function Bclockwise()
{
bclockwise=1;
}

function reset() 
{
resetvar=1;
}

function Wcounterclockwise() 
{
wcounterclockwise=1;
}

function Wclockwise()
{
wclockwise=1;
}
