var noinput = 0;
var differentinput = 0;
var counter;
var corrTempDiffW = 0;
var corrTempDiffB = 0;

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
        if (durationINms != 0 && durationOUTms != 0) {
            noinput = 1;
            correctionB(gradBCorr - gradB);
            correctionW(gradWCorr - gradW);
            corrTempDiffB = gradBCorr - gradB;
            corrTempDiffW = gradWCorr - gradW;
            gradW = 0;
            gradB = 0;
            timerM();
        }
    }
}

function logicMath() {

    var speedB = 111 / durationOUTms; //wie viel grad pro ms
    var speedW = 111 / durationINms; //wie viel grad pro ms

//speed umrechnen
speedBumgerechnet=speedB*0.001;
speedWumgerechnet=speedW*0.001;


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

    if (0.25>Math.abs(((gradW % 360) / (360 / 111))-((gradB % 360) / (360 / 111)))) {
        correctionB(gradB+corrTempDiffB);
        correctionW(gradW+corrTempDiffW)
        clearInterval(counter);
        durationOUTms = 0;
        durationINms = 0;
        noinput = 0;
        differentinput = 0;

    }
}