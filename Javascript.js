var main;
var posW = 0;
gradW = 0;
var posB = 0;
gradB = 0;
var posBCorr = 0;
gradBCorr = 0;
var posWCorr = 0;
gradWCorr = 0;
myFunction();

function myFunction() {
    main = setInterval(main, 10);
}

function main() {
    readPositionCorr();
    convertGradToSegmentYellow();
    sendDataToInterface(0, 0, posW, posB, posWCorr, posBCorr);
    sendDataToYellowPointIN(gradW);
    sendDataToYellowPointOUT(gradB);


}

function sendDataToInterface(durationIN, durationOUT, sektorIn, sektorOUT, sektorPredictIN, sektorPredictOUT) {
    document.getElementById("durationInputFieldIN").innerHTML = durationIN;
    document.getElementById("durationInputFieldOUT").innerHTML = durationOUT;
    document.getElementById("insertinsektor").innerHTML = sektorIn;
    document.getElementById("insertoutsektor").innerHTML = sektorOUT;
    document.getElementById("insertinsektorpredict").innerHTML = sektorPredictIN
    document.getElementById("insertoutsektorpredict").innerHTML = sektorPredictOUT;
}

function readPositionCorr() {
    gradBCorr = (getRotationAngle(document.getElementById('correctionOUT')));
    while (gradBCorr < 360 * 2) {
        gradBCorr = gradBCorr + 360;
    }
    posBCorr = Math.round((gradBCorr % 360) / (360 / 111) + 1);

    gradWCorr = (getRotationAngle(document.getElementById('correctionIN')));
    while (gradWCorr < 360 * 2) {
        gradWCorr = gradWCorr + 360;
    }
    posWCorr = Math.round((gradWCorr % 360) / (360 / 111) + 1);

    if (posWCorr == 112) {
        posWCorr = posWCorr - 1;
    }
    if (posBCorr == 112) {
        posBCorr = posBCorr - 1;
    }
}

function sendDataToYellowPointIN(incircle) {
    document.getElementById("yellowIN").style.transform = "translate(-50%,-50%) rotate(" + incircle + "deg)";
}

function sendDataToYellowPointIN(outcircle) {
    document.getElementById("yellowOUT").style.transform = "translate(-50%,-50%) rotate(" + outcircle + "deg)";
}


function convertGradToSegmentYellow() {
    while (gradB < 360 * 2) {
        gradB = gradB + 360;
    }
    posB = Math.round((gradB % 360) / (360 / 111) + 1);

    gradWCorr = (getRotationAngle(document.getElementById('correctionIN')));
    while (gradW < 360 * 2) {
        gradW = gradW + 360;
    }
    posW = Math.round((gradW % 360) / (360 / 111) + 1);

    if (posW == 112) {
        posW = posW - 1;
    }
    if (posB == 112) {
        posB = posB - 1;
    }
}

function correctionB(b) {
    new Propeller(document.getElementById('correctionOUT'), {
        inertia: 0,
        speed: 0,
        angle: b
    });
}

function correctionW(a) {
    new Propeller(document.getElementById('correctionIN'), {
        inertia: 0,
        speed: 0,
        angle: a
    });
}

function reset() {
    correctionB(0);
    correctionW(0);
    gradW = 0;
    gradB = 0;
}