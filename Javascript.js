var myVar;
var myVar2;
var myVar3;
var degW = 0;
var degB = 0;
var bclockwise = 0;
var bcounterclockwise = 0;
var wclockwise = 0;
var wcounterclockwise = 0;
var resetvar = 0;
var positionOUT = 90;
var positionIN = 90;
var speed = 1;
var speed = 1;
var duration;
var durationIN = 1;
var durationOUT = 1;

myFunction();

function myFunction() {
    myVar = setInterval(alertFunc, 10);
}

function myFunction2() {
    myVar2 = setInterval(alertFunc2, (speed * 1000));
}

function myFunction3() {
    myVar3 = setInterval(alertFunc3, (speed1 * 1000));
}

function alertFunc2() {
    if (bclockwise == 1) {
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        positionOUT = positionOUT + (360 / 111);
        durationOUT = durationOUT - speed;
    }
    if (bcounterclockwise == 1) {
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        positionOUT = positionOUT - (360 / 111);
        durationOUT = durationOUT - speed;
    }
    if (durationOUT <= 0) {
        bclockwise = 0;
        bcounterclockwise = 0;
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        clearInterval(myVar2);
    }
}

function alertFunc3() {
    if (wclockwise == 1) {
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        positionIN = positionIN + (360 / 111);
        durationIN = durationIN - speed1;
    }
    if (wcounterclockwise == 1) {
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        positionIN = positionIN - (360 / 111);
        durationIN = durationIN - speed1;
    }
    if (durationIN <= 0) {
        wclockwise = 0;
        wcounterclockwise = 0;
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        clearInterval(myVar3);
    }
}

function alertFunc() {
    document.getElementById("insertoutsektor").innerHTML = positionIN;
    document.getElementById("insertinsektor").innerHTML = positionOUT;

    if (resetvar == 1) {
        positionOUT = 90;
        positionIN = 90;
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(90deg)";
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(90deg)";
        resetvar = 0;
        wclockwise = 0;
        wcounterclockwise = 0;
        bclockwise = 0;
        bcounterclockwise = 0;

    }
}

function testinputSpeed() {
    if (speed < 0.01 || speed > 10000) {
        alert('Geschwindigkeit außerhalb der Animationsgeschwindigkeit!\nBitte einen Wert größer/gleich 0.01 eingeben und niedriger als 10000!');
        reset();
    }
}

function Bcounterclockwise() {
    if (bcounterclockwise == 0 && bclockwise == 0) {
        speed = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationOUT = duration;
        testinputSpeed();
        bcounterclockwise = 1;
        myFunction2();
    }
}

function Bclockwise() {
    if (bclockwise == 0 && bcounterclockwise == 0) {
        speed = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationOUT = duration;
        testinputSpeed();
        bclockwise = 1;
        myFunction2();
    }
}

function reset() {
    clearInterval(myVar2);
    clearInterval(myVar3);
    resetvar = 1;
}

function Wcounterclockwise() {
    if (wcounterclockwise == 0 && wclockwise == 0) {
        speed1 = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationIN = duration;
        testinputSpeed();
        wcounterclockwise = 1;
        myFunction3();

    }
}

function Wclockwise() {
    if (wclockwise == 0 && wcounterclockwise == 0) {
        speed1 = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationIN = duration;
        testinputSpeed();
        wclockwise = 1;
        myFunction3();
    }

}