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



    if (lastactionIN == 0) {
        gradW = gradW + (speedW * (360 / 111) * 0.10);
    } else {
        gradW = gradW - (speedW * (360 / 111) * 0.10);
    }
    correctionW(gradW + corrTempDiffW);
    if (lastactionOUT == 0) {
        gradB = gradB + (speedB * (360 / 111) * 0.10);
    } else {
        gradB = gradB - (speedB * (360 / 111) * 0.10);
    }
    correctionB(gradB + corrTempDiffB);

    if (Math.round((gradW % 360) / (360 / 111)) == Math.round((gradB % 360) / (360 / 111))) {
        clearInterval(counter);
        durationOUTms = 0;
        durationINms = 0;
        noinput = 0;
        differentinput = 0;

    }

}