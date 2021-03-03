var main;
var posW=0;
var posB=0;
var posBCorr=0;
var posWCorr=0;
myFunction();

function myFunction() {
    main = setInterval(main, 10);
}

function main() {
    readPositionCorr();
    sendDataToInterface(1,1,posW,posB,posWCorr,posBCorr);
     
}
function sendDataToInterface(durationIN,durationOUT,sektorIn,sektorOUT,sektorPredictIN,sektorPredictOUT) {
    document.getElementById("durationInputFieldIN").innerHTML = durationIN;
    document.getElementById("durationInputFieldOUT").innerHTML = durationOUT;
    document.getElementById("insertinsektor").innerHTML = sektorIn;
    document.getElementById("insertoutsektor").innerHTML = sektorOUT;
    document.getElementById("insertinsektorpredict").innerHTML = sektorPredictIN
    document.getElementById("insertoutsektorpredict").innerHTML = sektorPredictOUT;
}

function readPositionCorr() {
    posBCorr = (getRotationAngle(document.getElementById('correctionOUT')));
    while(posBCorr<360*2)
    {
        posBCorr=posBCorr+360;
    }
    posBCorr=Math.round((posBCorr%360)/(360/110)+1);

    posWCorr = (getRotationAngle(document.getElementById('correctionIN')));
    while(posWCorr<360*2)
    {
        posWCorr=posWCorr+360;
    }
    posWCorr=Math.round((posWCorr%360)/(360/110)+1);
}