var noinput = 0;
var differentinput = 0;
var counter;
var corrTempDiffW = 0;
var corrTempDiffB = 0;
var BorWSpeed = 0;
var sektorNumberOUTGreenSave = 0;
var sektorNumberINGreenSave = 0;

function timerM() {
    counter = setInterval(logicMath, 10);
}

function mathM(number) {
    if (noinput == 0) {
        switch (number) {
            case 1:
                lastactionOUT = 1;
                break;
            case 2:
                lastactionOUT = 0;
                break;
            case 3:
                lastactionIN = 1;
                break;
            case 4:
                lastactionIN = 0;
                break;
        }
        if (lastactionIN == 0 && lastactionOUT == 1 || lastactionIN == 1 && lastactionOUT == 0) {
            differentinput = 1;
        } else {
            differentinput = 0;
        }
        if (durationINms != 0 && durationOUTms != 0 && differentinput == 1) {
            noinput = 1;
            correctionB(gradBCorr - gradB);
            correctionW(gradWCorr - gradW);
            corrTempDiffB = gradBCorr - gradB;
            corrTempDiffW = gradWCorr - gradW;
            gradW = 0;
            gradB = 0;
            sektorNumberINGreenSave = posWCorr;
            sektorNumberOUTGreenSave = posBCorr;
            timerM();
        }
    }
}

function logicMath() {

    var speedB = 111 / durationOUTms; //wie viel grad pro ms
    var speedW = 111 / durationINms; //wie viel grad pro ms

    //speed umrechnen
    speedBumgerechnet = speedB * 0.1;
    speedWumgerechnet = speedW * 0.1;

    var abstand = (Math.abs(Math.round(posB - posW)));
    if (speedB >= speedW) {
        BorWSpeed = 1;
    } else {
        BorWSpeed = 0;
    }
    if (BorWSpeed == 1) {
        //B hat eine höhere Geschwindigkeit
        while ((speedBumgerechnet * (360 / 111) * 10) < abstand / 3) {
            speedWumgerechnet = speedWumgerechnet * 1.0001;
            speedBumgerechnet = speedBumgerechnet * 1.0001;
        }
    } else {
        //W hat eine höhere Geschwindigkeit
        while ((speedWumgerechnet * (360 / 111) * 10) < abstand / 3) {
            speedWumgerechnet = speedWumgerechnet * 1.0001;
            speedBumgerechnet = speedBumgerechnet * 1.0001;
        }
    }
    if (lastactionIN == 0) {
        gradW = gradW + (speedWumgerechnet * (360 / 111) * 10);
    } else {
        gradW = gradW - (speedWumgerechnet * (360 / 111) * 10);
    }
    correctionW(gradW + corrTempDiffW);
    if (lastactionOUT == 0) {
        gradB = gradB + (speedBumgerechnet * (360 / 111) * 10);
    } else {
        gradB = gradB - (speedBumgerechnet * (360 / 111) * 10);
    }
    correctionB(gradB + corrTempDiffB);

    if (2 > Math.abs(((gradW % 360) / (360 / 111)) - ((gradB % 360) / (360 / 111)))) {
        console.log("ende erreicht!");
        correctionB(gradB + corrTempDiffB);
        correctionW(gradW + corrTempDiffW);
        clearInterval(counter);
        var counterBcorr = 0;
        var counterWcorr = 0;
        while (0.25 < Math.abs(gradB - gradW)) {
            console.log("in while");
            if (gradB < gradW) {
                gradB = gradB + 0.1;
                corrTempDiffB = corrTempDiffB + 0.1;
                counterBcorr = counterBcorr + 0.1;

            }
            if (gradB > gradW) {
                gradW = gradW + 0.1;
                corrTempDiffW = corrTempDiffW + 0.1;
                counterWcorr = counterWcorr + 0.1;

            }


        }
        if (lastactionOUT == 0) {
            correctionB(gradB + corrTempDiffB - counterBcorr);
        } else {
            correctionB(gradB + corrTempDiffB + counterBcorr);
        }
        if (lastactionIN === 0) {
            correctionW(gradW + corrTempDiffW - counterWcorr);
        } else {
            correctionW(gradW + corrTempDiffW + counterWcorr);
        }


        durationOUTms = 0;
        durationINms = 0;
        noinput = 0;
        differentinput = 0;

    }
}