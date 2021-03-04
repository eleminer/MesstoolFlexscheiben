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
if(durationINms!=0 && durationOUTms !=0)
{
    noinput=1;
    //start
    var speedB=111/durationOUTms;
    var speedW=111/durationINms;
}
}

