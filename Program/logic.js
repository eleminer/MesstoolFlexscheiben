//correctionB(wert)
//correctionW(wert)
//gradW=0;
//gradB=0;
//durationINms=0;
//durationOUTms=0;

//all in grad

//taster sperren

//resetYellow()
//resetCorr()

//1 = bcounterclockwise
//2 = bclockwise
//3 = wcounterclockwise
//4= wclockwise
////lastaction
//lastactionIN = 0;
//lastactionOUT = 0;
//0=mit dem Uhrzeigersinn 1=gegen den Uhrzeigersinn 
var noinput=0;


function mathM(number)
{
switch (number)
{
case 1: lastactionOUT=1;break;
case 2: lastactionOUT=0;break;
case 3: lastactionIN=1;break;
case 4: lastactionIN=0;break;
}
if(durationINms!=0 && durationOUTms !=0)
{
    noinput=1;
    //start
    //Geschwindigkeit in Steps pro ms berechnen:
    var speedB=111/durationOUTms;
    var speedW=111/durationINms;
    //außen: speedB*X
    //innen: speedW*X
    



}
}

