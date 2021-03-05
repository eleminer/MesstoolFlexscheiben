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
            logicMath();
        }
    }
}

function logicMath() {
    if (lastactionIN == 0) {
        posW = 0;
    } else {
        posW = 360;
    }
    if (lastactionOUT == 0) {
        posB = 0;
    } else {
        posB = 360;
    }
    
    //corectionB(wert) correctionW(wert) gradW=wert gradB=wert

}