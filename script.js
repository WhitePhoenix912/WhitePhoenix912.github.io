var cell_block1 = document.querySelectorAll(".game-item1");
var cell_block2 = document.querySelectorAll(".game-item2");
var cell_block3 = document.querySelectorAll(".game-item3");
var cell_block4 = document.querySelectorAll(".game-item4");
var cell_block5 = document.querySelectorAll(".game-item5");
var cell_block6 = document.querySelectorAll(".game-item6");
var cell_block7 = document.querySelectorAll(".game-item7");
var cell_block8 = document.querySelectorAll(".game-item8");
var cell_block9 = document.querySelectorAll(".game-item9");

var openRules = document.getElementById("text-rules");
document.getElementById("get-rules").onclick = buttonGetRules;
document.getElementById("close-rules").onclick = buttonCloseRules;

var elem1 = document.getElementById("1");
var elem2 = document.getElementById("2");
var elem3 = document.getElementById("3");
var elem4 = document.getElementById("4");
var elem5 = document.getElementById("5");
var elem6 = document.getElementById("6");
var elem7 = document.getElementById("7");
var elem8 = document.getElementById("8");
var elem9 = document.getElementById("9");

var elem10 = document.getElementById("10");
var elem11 = document.getElementById("11");
var elem12 = document.getElementById("12");
var elem13 = document.getElementById("13");
var elem14 = document.getElementById("14");
var elem15 = document.getElementById("15");
var elem16 = document.getElementById("16");
var elem17 = document.getElementById("17");
var elem18 = document.getElementById("18");

var elem19 = document.getElementById("19");
var elem20 = document.getElementById("20");
var elem21 = document.getElementById("21");
var elem22 = document.getElementById("22");
var elem23 = document.getElementById("23");
var elem24 = document.getElementById("24");
var elem25 = document.getElementById("25");
var elem26 = document.getElementById("26");
var elem27 = document.getElementById("27");

var elem28 = document.getElementById("28");
var elem29 = document.getElementById("29");
var elem30 = document.getElementById("30");
var elem31 = document.getElementById("31");
var elem32 = document.getElementById("32");
var elem33 = document.getElementById("33");
var elem34 = document.getElementById("34");
var elem35 = document.getElementById("35");
var elem36 = document.getElementById("36");

var elem37 = document.getElementById("37");
var elem38 = document.getElementById("38");
var elem39 = document.getElementById("39");
var elem40 = document.getElementById("40");
var elem41 = document.getElementById("41");
var elem42 = document.getElementById("42");
var elem43 = document.getElementById("43");
var elem44 = document.getElementById("44");
var elem45 = document.getElementById("45");

var elem46 = document.getElementById("46");
var elem47 = document.getElementById("47");
var elem48 = document.getElementById("48");
var elem49 = document.getElementById("49");
var elem50 = document.getElementById("50");
var elem51 = document.getElementById("51");
var elem52 = document.getElementById("52");
var elem53 = document.getElementById("53");
var elem54 = document.getElementById("54");

var elem55 = document.getElementById("55");
var elem56 = document.getElementById("56");
var elem57 = document.getElementById("57");
var elem58 = document.getElementById("58");
var elem59 = document.getElementById("59");
var elem60 = document.getElementById("60");
var elem61 = document.getElementById("61");
var elem62 = document.getElementById("62");
var elem63 = document.getElementById("63");

var elem64 = document.getElementById("64");
var elem65 = document.getElementById("65");
var elem66 = document.getElementById("66");
var elem67 = document.getElementById("67");
var elem68 = document.getElementById("68");
var elem69 = document.getElementById("69");
var elem70 = document.getElementById("70");
var elem71 = document.getElementById("71");
var elem72 = document.getElementById("72");

var elem73 = document.getElementById("73");
var elem74 = document.getElementById("74");
var elem75 = document.getElementById("75");
var elem76 = document.getElementById("76");
var elem77 = document.getElementById("77");
var elem78 = document.getElementById("78");
var elem79 = document.getElementById("79");
var elem80 = document.getElementById("80");
var elem81 = document.getElementById("81");


var result = document.getElementById("result-game");
var message = document.getElementById("message");
var reset = document.getElementById("reset-game");
var currentScore = document.getElementById("currentScore");
var closeIfComputerTurn = document.getElementById("computerStep");
var player = "X";
var step = 0;

var localWinInCell1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell7 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell8 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var localWinInCell9 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
var globalWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

var currentCell = 0;
var currentStep = 0;
var currentBlock = 0;

var sum = 0;

var stepsInOne = 0;
var stepsInTwo = 0;
var stepsInThree = 0;
var stepsInFour = 0;
var stepsInFive = 0;
var stepsInSix = 0;
var stepsInSeven = 0;
var stepsInEight = 0;
var stepsInNine = 0;

var isWinOrLoseInOne_X = new Boolean(false);
var isWinOrLoseInOne_O = new Boolean(false);

var isWinOrLoseInTwo_X = new Boolean(false);
var isWinOrLoseInTwo_O = new Boolean(false);

var isWinOrLoseInThree_X = new Boolean(false);
var isWinOrLoseInThree_O = new Boolean(false);

var isWinOrLoseInFour_X = new Boolean(false);
var isWinOrLoseInFour_O = new Boolean(false);

var isWinOrLoseInFive_X = new Boolean(false);
var isWinOrLoseInFive_O = new Boolean(false);

var isWinOrLoseInSix_X = new Boolean(false);
var isWinOrLoseInSix_O = new Boolean(false);

var isWinOrLoseInSeven_X = new Boolean(false);
var isWinOrLoseInSeven_O = new Boolean(false);

var isWinOrLoseInEight_X = new Boolean(false);
var isWinOrLoseInEight_O = new Boolean(false);

var isWinOrLoseInNine_X = new Boolean(false);
var isWinOrLoseInNine_O = new Boolean(false);

var cellTwoFull = new Boolean(false);
var cellThreeFull = new Boolean(false);
var cellFourFull = new Boolean(false);
var cellFiveFull = new Boolean(false);
var cellSixFull = new Boolean(false);
var cellSevenFull = new Boolean(false);
var cellEightFull = new Boolean(false);
var cellNineFull = new Boolean(false);

var gameWin_X = new Boolean(false);
var gameWin_O = new Boolean(false);

var score = 2000;

var firstTurn;
var firstComputer = new Boolean(false);

for (var i = 0; i < 9; i++) {
    cell_block1[i].addEventListener("click", firstStep);
    cell_block2[i].addEventListener("click", firstStep);
    cell_block3[i].addEventListener("click", firstStep);
    cell_block4[i].addEventListener("click", firstStep);
    cell_block5[i].addEventListener("click", firstStep);
    cell_block6[i].addEventListener("click", firstStep);
    cell_block7[i].addEventListener("click", firstStep);
    cell_block8[i].addEventListener("click", firstStep);
    cell_block9[i].addEventListener("click", firstStep);
}

firstTurn = Math.floor(Math.random() * 11);
if (firstTurn > 5) {
    currentCell = Math.floor(Math.random() * 9 + 1);
    firstComputer = true;
    message.innerText = "Первый ход - Компьютер";
    computerStep();
}

function buttonGetRules() {
    openRules.style.display = "block";
}

function buttonCloseRules() {
    openRules.style.display = "none";
}

function gamingAreaOne() {
    document.getElementById("closed1").style.zIndex = "-1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaTwo() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "-1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaThree() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "-1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaFour() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "-1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaFive() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "-1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaSix() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "-1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaSeven() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "-1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaEight() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "-1";
    document.getElementById("closed9").style.zIndex = "1";
}

function gamingAreaNine() {
    document.getElementById("closed1").style.zIndex = "1";
    document.getElementById("closed2").style.zIndex = "1";
    document.getElementById("closed3").style.zIndex = "1";
    document.getElementById("closed4").style.zIndex = "1";
    document.getElementById("closed5").style.zIndex = "1";
    document.getElementById("closed6").style.zIndex = "1";
    document.getElementById("closed7").style.zIndex = "1";
    document.getElementById("closed8").style.zIndex = "1";
    document.getElementById("closed9").style.zIndex = "-1";
}

function cellIsFull() {
    if (isWinOrLoseInOne_X === true && currentCell === 1) {
        document.getElementById("local1").style.zIndex = "2";
        document.getElementById("local1").style.backgroundColor = "#399c30";
        document.getElementById("local1").style.opacity = "0.8";
        var local1 = document.getElementById("local1");
        local1.innerHTML = "X";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInOne_X === true) {
        document.getElementById("local1").style.zIndex = "2";
        document.getElementById("local1").style.backgroundColor = "#399c30";
        document.getElementById("local1").style.opacity = "0.8";
        var local1 = document.getElementById("local1");
        local1.innerHTML = "X";
    } else if (isWinOrLoseInOne_O === true && currentCell === 1) {
        document.getElementById("local1").style.zIndex = "2";
        document.getElementById("local1").style.backgroundColor = "#d18c02";
        document.getElementById("local1").style.opacity = "0.8";
        var local1 = document.getElementById("local1");
        local1.innerHTML = "O";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInOne_O === true) {
        document.getElementById("local1").style.zIndex = "2";
        document.getElementById("local1").style.backgroundColor = "#d18c02";
        document.getElementById("local1").style.opacity = "0.8";
        var local1 = document.getElementById("local1");
        local1.innerHTML = "O";
    } else if (stepsInOne === 9 && currentCell === 1) {
        document.getElementById("local1").style.zIndex = "2";
        document.getElementById("local1").style.backgroundColor = "grey";
        document.getElementById("local1").style.opacity = "0.8";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (stepsInOne === 9) {
        document.getElementById("local1").style.zIndex = "2";
        document.getElementById("local1").style.backgroundColor = "grey";
        document.getElementById("local1").style.opacity = "0.8";
    }


    if (isWinOrLoseInTwo_X === true && currentCell === 2) {
        document.getElementById("local2").style.zIndex = "2";
        document.getElementById("local2").style.backgroundColor = "#399c30";
        document.getElementById("local2").style.opacity = "0.8";
        var local2 = document.getElementById("local2");
        local2.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInTwo_X === true) {
        document.getElementById("local2").style.zIndex = "2";
        document.getElementById("local2").style.backgroundColor = "#399c30";
        document.getElementById("local2").style.opacity = "0.8";
        var local2 = document.getElementById("local2");
        local2.innerHTML = "X";
    } else if (isWinOrLoseInTwo_O === true && currentCell === 2) {
        document.getElementById("local2").style.zIndex = "2";
        document.getElementById("local2").style.backgroundColor = "#d18c02";
        document.getElementById("local2").style.opacity = "0.8";
        var local2 = document.getElementById("local2");
        local2.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInTwo_O === true) {
        document.getElementById("local2").style.zIndex = "2";
        document.getElementById("local2").style.backgroundColor = "#d18c02";
        document.getElementById("local2").style.opacity = "0.8";
        var local2 = document.getElementById("local2");
        local2.innerHTML = "O";
    } else if (stepsInTwo === 9 && currentCell === 2) {
        document.getElementById("local2").style.zIndex = "2";
        document.getElementById("local2").style.backgroundColor = "grey";
        document.getElementById("local2").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
        cellTwoFull = true;
    } else if (stepsInTwo === 9) {
        document.getElementById("local2").style.zIndex = "2";
        document.getElementById("local2").style.backgroundColor = "grey";
        document.getElementById("local2").style.opacity = "0.8";
        cellTwoFull = true;
    }



    if (isWinOrLoseInThree_X === true && currentCell === 3) {
        document.getElementById("local3").style.zIndex = "2";
        document.getElementById("local3").style.backgroundColor = "#399c30";
        document.getElementById("local3").style.opacity = "0.8";
        var local3 = document.getElementById("local3");
        local3.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInThree_X === true) {
        document.getElementById("local3").style.zIndex = "2";
        document.getElementById("local3").style.backgroundColor = "#399c30";
        document.getElementById("local3").style.opacity = "0.8";
        var local3 = document.getElementById("local3");
        local3.innerHTML = "X";
    } else if (isWinOrLoseInThree_O === true && currentCell === 3) {
        document.getElementById("local3").style.zIndex = "2";
        document.getElementById("local3").style.backgroundColor = "#d18c02";
        document.getElementById("local3").style.opacity = "0.8";
        var local3 = document.getElementById("local3");
        local3.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInThree_O === true) {
        document.getElementById("local3").style.zIndex = "2";
        document.getElementById("local3").style.backgroundColor = "#d18c02";
        document.getElementById("local3").style.opacity = "0.8";
        var local3 = document.getElementById("local3");
        local3.innerHTML = "O";
    } else if (stepsInThree === 9 && currentCell === 3) {
        document.getElementById("local3").style.zIndex = "2";
        document.getElementById("local3").style.backgroundColor = "grey";
        document.getElementById("local3").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
        cellThreeFull = true;
    } else if (stepsInThree === 9) {
        document.getElementById("local3").style.zIndex = "2";
        document.getElementById("local3").style.backgroundColor = "grey";
        document.getElementById("local3").style.opacity = "0.8";
        cellThreeFull = true;
    }




    if (isWinOrLoseInFour_X === true && currentCell === 4) {
        document.getElementById("local4").style.zIndex = "2";
        document.getElementById("local4").style.backgroundColor = "#399c30";
        document.getElementById("local4").style.opacity = "0.8";
        var local4 = document.getElementById("local4");
        local4.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInFour_X === true) {
        document.getElementById("local4").style.zIndex = "2";
        document.getElementById("local4").style.backgroundColor = "#399c30";
        document.getElementById("local4").style.opacity = "0.8";
        var local4 = document.getElementById("local4");
        local4.innerHTML = "X";
    } else if (isWinOrLoseInFour_O === true && currentCell === 4) {
        document.getElementById("local4").style.zIndex = "2";
        document.getElementById("local4").style.backgroundColor = "#d18c02";
        document.getElementById("local4").style.opacity = "0.8";
        var local4 = document.getElementById("local4");
        local4.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInFour_O === true) {
        document.getElementById("local4").style.zIndex = "2";
        document.getElementById("local4").style.backgroundColor = "#d18c02";
        document.getElementById("local4").style.opacity = "0.8";
        var local4 = document.getElementById("local4");
        local4.innerHTML = "O";
    } else if (stepsInFour === 9 && currentCell === 4) {
        document.getElementById("local4").style.zIndex = "2";
        document.getElementById("local4").style.backgroundColor = "grey";
        document.getElementById("local4").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
        cellFourFull = true;
    } else if (stepsInFour === 9) {
        document.getElementById("local4").style.zIndex = "2";
        document.getElementById("local4").style.backgroundColor = "grey";
        document.getElementById("local4").style.opacity = "0.8";
        cellFourFull = true;
    }




    if (isWinOrLoseInFive_X === true && currentCell === 5) {
        document.getElementById("local5").style.zIndex = "2";
        document.getElementById("local5").style.backgroundColor = "#399c30";
        document.getElementById("local5").style.opacity = "0.8";
        var local5 = document.getElementById("local5");
        local5.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInFive_X === true) {
        document.getElementById("local5").style.zIndex = "2";
        document.getElementById("local5").style.backgroundColor = "#399c30";
        document.getElementById("local5").style.opacity = "0.8";
        var local5 = document.getElementById("local5");
        local5.innerHTML = "X";
    } else if (isWinOrLoseInFive_O === true && currentCell === 5) {
        document.getElementById("local5").style.zIndex = "2";
        document.getElementById("local5").style.backgroundColor = "#d18c02";
        document.getElementById("local5").style.opacity = "0.8";
        var local5 = document.getElementById("local5");
        local5.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInFive_O === true) {
        document.getElementById("local5").style.zIndex = "2";
        document.getElementById("local5").style.backgroundColor = "#d18c02";
        document.getElementById("local5").style.opacity = "0.8";
        var local5 = document.getElementById("local5");
        local5.innerHTML = "O";
    } else if (stepsInFive === 9 && currentCell === 5) {
        document.getElementById("local5").style.zIndex = "2";
        document.getElementById("local5").style.backgroundColor = "grey";
        document.getElementById("local5").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
        cellFiveFull = true;
    } else if (stepsInFive === 9) {
        document.getElementById("local5").style.zIndex = "2";
        document.getElementById("local5").style.backgroundColor = "grey";
        document.getElementById("local5").style.opacity = "0.8";
        cellFiveFull = true;
    }




    if (isWinOrLoseInSix_X === true && currentCell === 6) {
        document.getElementById("local6").style.zIndex = "2";
        document.getElementById("local6").style.backgroundColor = "#399c30";
        document.getElementById("local6").style.opacity = "0.8";
        var local6 = document.getElementById("local6");
        local6.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInSix_X === true) {
        document.getElementById("local6").style.zIndex = "2";
        document.getElementById("local6").style.backgroundColor = "#399c30";
        document.getElementById("local6").style.opacity = "0.8";
        var local6 = document.getElementById("local6");
        local6.innerHTML = "X";
    } else if (isWinOrLoseInSix_O === true && currentCell === 6) {
        document.getElementById("local6").style.zIndex = "2";
        document.getElementById("local6").style.backgroundColor = "#d18c02";
        document.getElementById("local6").style.opacity = "0.8";
        var local6 = document.getElementById("local6");
        local6.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInSix_O === true) {
        document.getElementById("local6").style.zIndex = "2";
        document.getElementById("local6").style.backgroundColor = "#d18c02";
        document.getElementById("local6").style.opacity = "0.8";
        var local6 = document.getElementById("local6");
        local6.innerHTML = "O";
    } else if (stepsInSix === 9 && currentCell === 6) {
        document.getElementById("local6").style.zIndex = "2";
        document.getElementById("local6").style.backgroundColor = "grey";
        document.getElementById("local6").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
        cellSixFull = true;
    } else if (stepsInSix === 9) {
        document.getElementById("local6").style.zIndex = "2";
        document.getElementById("local6").style.backgroundColor = "grey";
        document.getElementById("local6").style.opacity = "0.8";
        cellSixFull = true;
    }




    if (isWinOrLoseInSeven_X === true && currentCell === 7) {
        document.getElementById("local7").style.zIndex = "2";
        document.getElementById("local7").style.backgroundColor = "#399c30";
        document.getElementById("local7").style.opacity = "0.8";
        var local7 = document.getElementById("local7");
        local7.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInSeven_X === true) {
        document.getElementById("local7").style.zIndex = "2";
        document.getElementById("local7").style.backgroundColor = "#399c30";
        document.getElementById("local7").style.opacity = "0.8";
        var local7 = document.getElementById("local7");
        local7.innerHTML = "X";
    } else if (isWinOrLoseInSeven_O === true && currentCell === 7) {
        document.getElementById("local7").style.zIndex = "2";
        document.getElementById("local7").style.backgroundColor = "#d18c02";
        document.getElementById("local7").style.opacity = "0.8";
        var local7 = document.getElementById("local7");
        local7.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInSeven_O === true) {
        document.getElementById("local7").style.zIndex = "2";
        document.getElementById("local7").style.backgroundColor = "#d18c02";
        document.getElementById("local7").style.opacity = "0.8";
        var local7 = document.getElementById("local7");
        local7.innerHTML = "O";
    } else if (stepsInSeven === 9 && currentCell === 7) {
        document.getElementById("local7").style.zIndex = "2";
        document.getElementById("local7").style.backgroundColor = "grey";
        document.getElementById("local7").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
        cellSevenFull = true;
    } else if (stepsInSeven === 9) {
        document.getElementById("local7").style.zIndex = "2";
        document.getElementById("local7").style.backgroundColor = "grey";
        document.getElementById("local7").style.opacity = "0.8";
        cellSevenFull = true;
    }




    if (isWinOrLoseInEight_X === true && currentCell === 8) {
        document.getElementById("local8").style.zIndex = "2";
        document.getElementById("local8").style.backgroundColor = "#399c30";
        document.getElementById("local8").style.opacity = "0.8";
        var local8 = document.getElementById("local8");
        local8.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInEight_X === true) {
        document.getElementById("local8").style.zIndex = "2";
        document.getElementById("local8").style.backgroundColor = "#399c30";
        document.getElementById("local8").style.opacity = "0.8";
        var local8 = document.getElementById("local8");
        local8.innerHTML = "X";
    } else if (isWinOrLoseInEight_O === true && currentCell === 8) {
        document.getElementById("local8").style.zIndex = "2";
        document.getElementById("local8").style.backgroundColor = "#d18c02";
        document.getElementById("local8").style.opacity = "0.8";
        var local8 = document.getElementById("local8");
        local8.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
    } else if (isWinOrLoseInEight_O === true) {
        document.getElementById("local8").style.zIndex = "2";
        document.getElementById("local8").style.backgroundColor = "#d18c02";
        document.getElementById("local8").style.opacity = "0.8";
        var local8 = document.getElementById("local8");
        local8.innerHTML = "O";
    } else if (stepsInEight === 9 && currentCell === 8) {
        document.getElementById("local8").style.zIndex = "2";
        document.getElementById("local8").style.backgroundColor = "grey";
        document.getElementById("local8").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed9").style.zIndex = "-1";
        cellEightFull = true;
    } else if (stepsInEight === 9) {
        document.getElementById("local8").style.zIndex = "2";
        document.getElementById("local8").style.backgroundColor = "grey";
        document.getElementById("local8").style.opacity = "0.8";
        cellEightFull = true;
    }




    if (isWinOrLoseInNine_X === true && currentCell === 9) {
        document.getElementById("local9").style.zIndex = "2";
        document.getElementById("local9").style.backgroundColor = "#399c30";
        document.getElementById("local9").style.opacity = "0.8";
        var local9 = document.getElementById("local9");
        local9.innerHTML = "X";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
    } else if (isWinOrLoseInNine_X === true) {
        document.getElementById("local9").style.zIndex = "2";
        document.getElementById("local9").style.backgroundColor = "#399c30";
        document.getElementById("local9").style.opacity = "0.8";
        var local9 = document.getElementById("local9");
        local9.innerHTML = "X";
    } else if (isWinOrLoseInNine_O === true && currentCell === 9) {
        document.getElementById("local9").style.zIndex = "2";
        document.getElementById("local9").style.backgroundColor = "#d18c02";
        document.getElementById("local9").style.opacity = "0.8";
        var local9 = document.getElementById("local9");
        local9.innerHTML = "O";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
    } else if (isWinOrLoseInNine_O === true) {
        document.getElementById("local9").style.zIndex = "2";
        document.getElementById("local9").style.backgroundColor = "#d18c02";
        document.getElementById("local9").style.opacity = "0.8";
        var local9 = document.getElementById("local9");
        local9.innerHTML = "O";
    } else if (stepsInNine === 9 && currentCell === 9) {
        document.getElementById("local9").style.zIndex = "2";
        document.getElementById("local9").style.backgroundColor = "grey";
        document.getElementById("local9").style.opacity = "0.8";
        document.getElementById("closed1").style.zIndex = "-1";
        document.getElementById("closed2").style.zIndex = "-1";
        document.getElementById("closed3").style.zIndex = "-1";
        document.getElementById("closed4").style.zIndex = "-1";
        document.getElementById("closed5").style.zIndex = "-1";
        document.getElementById("closed6").style.zIndex = "-1";
        document.getElementById("closed7").style.zIndex = "-1";
        document.getElementById("closed8").style.zIndex = "-1";
        cellNineFull = true;
    } else if (stepsInNine === 9) {
        document.getElementById("local9").style.zIndex = "2";
        document.getElementById("local9").style.backgroundColor = "grey";
        document.getElementById("local9").style.opacity = "0.8";
        cellNineFull = true;
    }
}
function firstStep() {
    currentCell = +this.getAttribute("data-sell");
    currentBlock = currentCell;
    currentBlock = Math.trunc(currentBlock / 10);
    currentCell = currentCell % 10;
    if (!this.textContent && step !== 81) {
        this.innerText = player;
        if (player === "X") {
            this.classList.add("x");
            player = "O";
        } else {
            this.classList.add("o");
            player = "X";
        }
        if (firstComputer !== true) {
            if (player === "X") {
                message.innerText = "Ваш ход (" + player + ")";
            } else {
                message.innerText = "Ход компьютера (" + player + ")";
            }
        } else {
            if (player === "X") {
                message.innerText = "Ход компьютера (" + player + ")";
            } else {
                message.innerText = "Ваш ход (" + player + ")";
            }
        }
        step++;
        score -= Math.floor(Math.random() * 20 + 1);
        currentScore.innerText = "Счёт: " + score;
        checkCell();

        winCheckInCell(currentBlock);
        if (firstComputer !== true) {
            if ((stepsInOne === 9 || isWinOrLoseInOne_X === true || isWinOrLoseInOne_O === true) &&
                    (stepsInTwo === 9 || isWinOrLoseInTwo_X === true || isWinOrLoseInTwo_O === true) &&
                    (stepsInThree === 9 || isWinOrLoseInThree_X === true || isWinOrLoseInThree_O === true) &&
                    (stepsInFour === 9 || isWinOrLoseInFour_X === true || isWinOrLoseInFour_O === true) &&
                    (stepsInFive === 9 || isWinOrLoseInFive_X === true || isWinOrLoseInFive_O === true) &&
                    (stepsInSix === 9 || isWinOrLoseInSix_X === true || isWinOrLoseInSix_O === true) &&
                    (stepsInSeven === 9 || isWinOrLoseInSeven_X === true || isWinOrLoseInSeven_O === true) &&
                    (stepsInEight === 9 || isWinOrLoseInEight_X === true || isWinOrLoseInEight_O === true) &&
                    (stepsInNine === 9 || isWinOrLoseInNine_X === true || isWinOrLoseInNine_O === true) &&
                    (gameWin_O !== true && gameWin_X !== true)) {
                message.innerText = "Игра окончена";
                result.innerText = "Ничья";
            } else if (gameWin_O === true) {
                message.innerText = "Игра окончена";
                result.innerText = "Победил компьютер!";
            } else if (gameWin_X === true) {
                message.innerText = "Игра окончена";
                result.innerText = "Вы победили!";
            } else if (step % 2 !== 0) {
                closeIfComputerTurn.style.display = "block";
                setTimeout(computerStep, 1500);
            }
        } else if (firstComputer !== false) {
            if ((stepsInOne === 9 || isWinOrLoseInOne_X === true || isWinOrLoseInOne_O === true) &&
                    (stepsInTwo === 9 || isWinOrLoseInTwo_X === true || isWinOrLoseInTwo_O === true) &&
                    (stepsInThree === 9 || isWinOrLoseInThree_X === true || isWinOrLoseInThree_O === true) &&
                    (stepsInFour === 9 || isWinOrLoseInFour_X === true || isWinOrLoseInFour_O === true) &&
                    (stepsInFive === 9 || isWinOrLoseInFive_X === true || isWinOrLoseInFive_O === true) &&
                    (stepsInSix === 9 || isWinOrLoseInSix_X === true || isWinOrLoseInSix_O === true) &&
                    (stepsInSeven === 9 || isWinOrLoseInSeven_X === true || isWinOrLoseInSeven_O === true) &&
                    (stepsInEight === 9 || isWinOrLoseInEight_X === true || isWinOrLoseInEight_O === true) &&
                    (stepsInNine === 9 || isWinOrLoseInNine_X === true || isWinOrLoseInNine_O === true) &&
                    (gameWin_O !== true && gameWin_X !== true)) {
                message.innerText = "Игра окончена";
                result.innerText = "Ничья";
            } else if (gameWin_O === true) {
                message.innerText = "Игра окончена";
                result.innerText = "Вы победили!";
            } else if (gameWin_X === true) {
                message.innerText = "Игра окончена";
                result.innerText = "Победил компьютер!";
            } else if (step % 2 === 0) {
                closeIfComputerTurn.style.display = "block";
                setTimeout(computerStep, 1500);
            }
        }
    }
}

function computerStep() {

    switch (currentCell) {
        case 1:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem1(randomStep);
            if (stepsInOne === 9 || isWinOrLoseInOne_X === true || isWinOrLoseInOne_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 2:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem2(randomStep);
            if (stepsInTwo === 9 || isWinOrLoseInTwo_X === true || isWinOrLoseInTwo_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 3:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem3(randomStep);
            if (stepsInThree === 9 || isWinOrLoseInThree_X === true || isWinOrLoseInThree_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 4:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem4(randomStep);
            if (stepsInFour === 9 || isWinOrLoseInFour_X === true || isWinOrLoseInFour_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 5:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem5(randomStep);
            if (stepsInFive === 9 || isWinOrLoseInFive_X === true || isWinOrLoseInFive_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 6:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem6(randomStep);
            if (stepsInSix === 9 || isWinOrLoseInSix_X === true || isWinOrLoseInSix_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 7:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem7(randomStep);
            if (stepsInSeven === 9 || isWinOrLoseInSeven_X === true || isWinOrLoseInSeven_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 8:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem8(randomStep);
            if (stepsInEight === 9 || isWinOrLoseInEight_X === true || isWinOrLoseInEight_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        case 9:
            var randomStep = Math.floor(Math.random() * 9 + 1);
            var element = findElem9(randomStep);
            if (stepsInNine === 9 || isWinOrLoseInNine_X === true || isWinOrLoseInNine_O === true) {
                currentCell = Math.floor(Math.random() * 9 + 1);
                computerStep();
            } else if (!element.textContent) {
                element.click();
                closeIfComputerTurn.style.display = "none";
            } else {
                computerStep();
            }
            break;
        default:
            alert("Ошибка");
            break;

    }

}

function findElem1(num) {
    switch (num) {
        case 1:
            return elem1;
            break;
        case 2:
            return elem2;
            break;
        case 3:
            return elem3;
            break;
        case 4:
            return elem4;
            break;
        case 5:
            return elem5;
            break;
        case 6:
            return elem6;
            break;
        case 7:
            return elem7;
            break;
        case 8:
            return elem8;
            break;
        case 9:
            return elem9;
            break;
    }
}

function findElem2(num) {
    switch (num) {
        case 1:
            return elem10;
            break;
        case 2:
            return elem11;
            break;
        case 3:
            return elem12;
            break;
        case 4:
            return elem13;
            break;
        case 5:
            return elem14;
            break;
        case 6:
            return elem15;
            break;
        case 7:
            return elem16;
            break;
        case 8:
            return elem17;
            break;
        case 9:
            return elem18;
            break;
    }
}

function findElem3(num) {
    switch (num) {
        case 1:
            return elem19;
            break;
        case 2:
            return elem20;
            break;
        case 3:
            return elem21;
            break;
        case 4:
            return elem22;
            break;
        case 5:
            return elem23;
            break;
        case 6:
            return elem24;
            break;
        case 7:
            return elem25;
            break;
        case 8:
            return elem26;
            break;
        case 9:
            return elem27;
            break;
    }
}

function findElem4(num) {
    switch (num) {
        case 1:
            return elem28;
            break;
        case 2:
            return elem29;
            break;
        case 3:
            return elem30;
            break;
        case 4:
            return elem31;
            break;
        case 5:
            return elem32;
            break;
        case 6:
            return elem33;
            break;
        case 7:
            return elem34;
            break;
        case 8:
            return elem35;
            break;
        case 9:
            return elem36;
            break;
    }
}

function findElem5(num) {
    switch (num) {
        case 1:
            return elem37;
            break;
        case 2:
            return elem38;
            break;
        case 3:
            return elem39;
            break;
        case 4:
            return elem40;
            break;
        case 5:
            return elem41;
            break;
        case 6:
            return elem42;
            break;
        case 7:
            return elem43;
            break;
        case 8:
            return elem44;
            break;
        case 9:
            return elem45;
            break;
    }
}

function findElem6(num) {
    switch (num) {
        case 1:
            return elem46;
            break;
        case 2:
            return elem47;
            break;
        case 3:
            return elem48;
            break;
        case 4:
            return elem49;
            break;
        case 5:
            return elem50;
            break;
        case 6:
            return elem51;
            break;
        case 7:
            return elem52;
            break;
        case 8:
            return elem53;
            break;
        case 9:
            return elem54;
            break;
    }
}

function findElem7(num) {
    switch (num) {
        case 1:
            return elem55;
            break;
        case 2:
            return elem56;
            break;
        case 3:
            return elem57;
            break;
        case 4:
            return elem58;
            break;
        case 5:
            return elem59;
            break;
        case 6:
            return elem60;
            break;
        case 7:
            return elem61;
            break;
        case 8:
            return elem62;
            break;
        case 9:
            return elem63;
            break;
    }
}

function findElem8(num) {
    switch (num) {
        case 1:
            return elem64;
            break;
        case 2:
            return elem65;
            break;
        case 3:
            return elem66;
            break;
        case 4:
            return elem67;
            break;
        case 5:
            return elem68;
            break;
        case 6:
            return elem69;
            break;
        case 7:
            return elem70;
            break;
        case 8:
            return elem71;
            break;
        case 9:
            return elem72;
            break;
    }
}

function findElem9(num) {
    switch (num) {
        case 1:
            return elem73;
            break;
        case 2:
            return elem74;
            break;
        case 3:
            return elem75;
            break;
        case 4:
            return elem76;
            break;
        case 5:
            return elem77;
            break;
        case 6:
            return elem78;
            break;
        case 7:
            return elem79;
            break;
        case 8:
            return elem80;
            break;
        case 9:
            return elem81;
            break;
    }
}

function winCheckInCell(currentBlock) {
    switch (currentBlock) {
        case 1:
            winCheck1(localWinInCell1, currentCell);
            break;
        case 2:
            winCheck2(localWinInCell2, currentCell);
            break;
        case 3:
            winCheck3(localWinInCell3, currentCell);
            break;
        case 4:
            winCheck4(localWinInCell4, currentCell);
            break;
        case 5:
            winCheck5(localWinInCell5, currentCell);
            break;
        case 6:
            winCheck6(localWinInCell6, currentCell);
            break;
        case 7:
            winCheck7(localWinInCell7, currentCell);
            break;
        case 8:
            winCheck8(localWinInCell8, currentCell);
            break;
        case 9:
            winCheck9(localWinInCell9, currentCell);
            break;
        default:
            alert("Ошибка");
            break;
    }
}

function winCheck1(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInOne_O = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInOne_X = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck2(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInTwo_O = true;
                cellTwoFull = true;
                cellIsFull();

                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInTwo_X = true;
                cellTwoFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck3(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInThree_O = true;
                cellThreeFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInThree_X = true;
                cellThreeFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck4(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInFour_O = true;
                cellFourFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInFour_X = true;
                cellFourFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck5(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInFive_O = true;
                cellFiveFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInFive_X = true;
                cellFiveFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck6(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInSix_O = true;
                cellSixFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                cellSixFull = true;
                isWinOrLoseInSix_X = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck7(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInSeven_O = true;
                cellSevenFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInSeven_X = true;
                cellSevenFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck8(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInEight_O = true;
                cellEightFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInEight_X = true;
                cellEightFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheck9(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                isWinOrLoseInNine_O = true;
                cellNineFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);

            } else if (sum === -300) {
                isWinOrLoseInNine_X = true;
                cellNineFull = true;
                cellIsFull();
                winCheckFin(globalWin, currentBlock);
            }
        }
    }
}

function winCheckFin(winArr, num) {
    for (w = 0; w < winArr.length; w++) {
        for (j = 0; j < 3; j++) {
            if (winArr[w][j] === num) {
                if (player === "X") {
                    winArr[w][j] = 0;
                }
                if (player === "O") {
                    winArr[w][j] = -100;
                }
            }
            sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if (sum === 0) {
                for (i = 0; i < 9; i++) {
                    cell_block1[i].removeEventListener("click", firstStep);
                    cell_block2[i].removeEventListener("click", firstStep);
                    cell_block3[i].removeEventListener("click", firstStep);
                    cell_block4[i].removeEventListener("click", firstStep);
                    cell_block5[i].removeEventListener("click", firstStep);
                    cell_block6[i].removeEventListener("click", firstStep);
                    cell_block7[i].removeEventListener("click", firstStep);
                    cell_block8[i].removeEventListener("click", firstStep);
                    cell_block9[i].removeEventListener("click", firstStep);
                }
                document.getElementById("local1").style.zIndex = "2";
                document.getElementById("local2").style.zIndex = "2";
                document.getElementById("local3").style.zIndex = "2";
                document.getElementById("local4").style.zIndex = "2";
                document.getElementById("local5").style.zIndex = "2";
                document.getElementById("local6").style.zIndex = "2";
                document.getElementById("local7").style.zIndex = "2";
                document.getElementById("local8").style.zIndex = "2";
                document.getElementById("local9").style.zIndex = "2";
                gameWin_O = true;

            } else if (sum === -300) {
                gameWin_X = true;
                for (i = 0; i < 9; i++) {
                    cell_block1[i].removeEventListener("click", firstStep);
                    cell_block2[i].removeEventListener("click", firstStep);
                    cell_block3[i].removeEventListener("click", firstStep);
                    cell_block4[i].removeEventListener("click", firstStep);
                    cell_block5[i].removeEventListener("click", firstStep);
                    cell_block6[i].removeEventListener("click", firstStep);
                    cell_block7[i].removeEventListener("click", firstStep);
                    cell_block8[i].removeEventListener("click", firstStep);
                    cell_block9[i].removeEventListener("click", firstStep);
                }
                document.getElementById("local1").style.zIndex = "2";
                document.getElementById("local2").style.zIndex = "2";
                document.getElementById("local3").style.zIndex = "2";
                document.getElementById("local4").style.zIndex = "2";
                document.getElementById("local5").style.zIndex = "2";
                document.getElementById("local6").style.zIndex = "2";
                document.getElementById("local7").style.zIndex = "2";
                document.getElementById("local8").style.zIndex = "2";
                document.getElementById("local9").style.zIndex = "2";
            }
        }
    }
}

function stepCounter() {
    switch (currentBlock) {
        case 1:
            stepsInOne++;
            break;
        case 2:
            stepsInTwo++;
            break;
        case 3:
            stepsInThree++;
            break;
        case 4:
            stepsInFour++;
            break;
        case 5:
            stepsInFive++;
            break;
        case 6:
            stepsInSix++;
            break;
        case 7:
            stepsInSeven++;
            break;
        case 8:
            stepsInEight++;
            break;
        case 9:
            stepsInNine++;
            break;
        default:
            alert("Ошибка");
            break;
    }
}

function checkCell() {
    switch (currentCell) {
        case 1:
            stepCounter();
            gamingAreaOne();
            cellIsFull();
            break;
        case 2:
            stepCounter();
            gamingAreaTwo();
            cellIsFull();

            break;
        case 3:
            stepCounter();
            gamingAreaThree();
            cellIsFull();
            break;
        case 4:
            stepCounter();
            gamingAreaFour();
            cellIsFull();
            break;
        case 5:
            stepCounter();
            gamingAreaFive();
            cellIsFull();
            break;
        case 6:
            stepCounter();
            gamingAreaSix();
            cellIsFull();
            break;
        case 7:
            stepCounter();
            gamingAreaSeven();
            cellIsFull();
            break;
        case 8:
            stepCounter();
            gamingAreaEight();
            cellIsFull();
            break;
        case 9:
            stepCounter();
            gamingAreaNine();
            cellIsFull();
            break;
        default:
            alert("Нет таких значений");
            break;
    }

}

function setDefault() {
    player = "X";
    step = 0;
    score = 2000;
    currentScore.innerText = "Счёт: 2000";
    firstComputer = false;

    localWinInCell1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell3 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell4 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell5 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell6 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell7 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell8 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    localWinInCell9 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    globalWin = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    currentCell = 0;
    currentStep = 0;
    currentBlock = 0;

    sum = 0;

    stepsInOne = 0;
    stepsInTwo = 0;
    stepsInThree = 0;
    stepsInFour = 0;
    stepsInFive = 0;
    stepsInSix = 0;
    stepsInSeven = 0;
    stepsInEight = 0;
    stepsInNine = 0;

    isWinOrLoseInOne_X = false;
    isWinOrLoseInOne_O = false;

    isWinOrLoseInTwo_X = false;
    isWinOrLoseInTwo_O = false;

    isWinOrLoseInThree_X = false;
    isWinOrLoseInThree_O = false;

    isWinOrLoseInFour_X = false;
    isWinOrLoseInFour_O = false;

    isWinOrLoseInFive_X = false;
    isWinOrLoseInFive_O = false;

    isWinOrLoseInSix_X = false;
    isWinOrLoseInSix_O = false;

    isWinOrLoseInSeven_X = false;
    isWinOrLoseInSeven_O = false;

    isWinOrLoseInEight_X = false;
    isWinOrLoseInEight_O = false;

    isWinOrLoseInNine_X = false;
    isWinOrLoseInNine_O = false;

    gameWin_X = false;
    gameWin_O = false;
}

function clearField() {
    for (i = 0; i < 9; i++) {
        cell_block1[i].textContent = "";
        cell_block1[i].classList.remove("x");
        cell_block1[i].classList.remove("o");
        cell_block1[i].addEventListener("click", firstStep);

        cell_block2[i].textContent = "";
        cell_block2[i].classList.remove("x");
        cell_block2[i].classList.remove("o");
        cell_block2[i].addEventListener("click", firstStep);

        cell_block3[i].textContent = "";
        cell_block3[i].classList.remove("x");
        cell_block3[i].classList.remove("o");
        cell_block3[i].addEventListener("click", firstStep);

        cell_block4[i].textContent = "";
        cell_block4[i].classList.remove("x");
        cell_block4[i].classList.remove("o");
        cell_block4[i].addEventListener("click", firstStep);

        cell_block5[i].textContent = "";
        cell_block5[i].classList.remove("x");
        cell_block5[i].classList.remove("o");
        cell_block5[i].addEventListener("click", firstStep);

        cell_block6[i].textContent = "";
        cell_block6[i].classList.remove("x");
        cell_block6[i].classList.remove("o");
        cell_block6[i].addEventListener("click", firstStep);

        cell_block7[i].textContent = "";
        cell_block7[i].classList.remove("x");
        cell_block7[i].classList.remove("o");
        cell_block7[i].addEventListener("click", firstStep);

        cell_block8[i].textContent = "";
        cell_block8[i].classList.remove("x");
        cell_block8[i].classList.remove("o");
        cell_block8[i].addEventListener("click", firstStep);

        cell_block9[i].textContent = "";
        cell_block9[i].classList.remove("x");
        cell_block9[i].classList.remove("o");
        cell_block9[i].addEventListener("click", firstStep);
    }
    result.innerText = "";
    message.innerText = "Ваш ход - первый";
    document.getElementById("closed1").style.zIndex = "-1";
    document.getElementById("closed2").style.zIndex = "-1";
    document.getElementById("closed3").style.zIndex = "-1";
    document.getElementById("closed4").style.zIndex = "-1";
    document.getElementById("closed5").style.zIndex = "-1";
    document.getElementById("closed6").style.zIndex = "-1";
    document.getElementById("closed7").style.zIndex = "-1";
    document.getElementById("closed8").style.zIndex = "-1";
    document.getElementById("closed9").style.zIndex = "-1";

    document.getElementById("local1").style.zIndex = "-1";
    document.getElementById("local2").style.zIndex = "-1";
    document.getElementById("local3").style.zIndex = "-1";
    document.getElementById("local4").style.zIndex = "-1";
    document.getElementById("local5").style.zIndex = "-1";
    document.getElementById("local6").style.zIndex = "-1";
    document.getElementById("local7").style.zIndex = "-1";
    document.getElementById("local8").style.zIndex = "-1";
    document.getElementById("local9").style.zIndex = "-1";

    document.getElementById("local1").style.backgroundColor = "grey";
    document.getElementById("local2").style.backgroundColor = "grey";
    document.getElementById("local3").style.backgroundColor = "grey";
    document.getElementById("local4").style.backgroundColor = "grey";
    document.getElementById("local5").style.backgroundColor = "grey";
    document.getElementById("local6").style.backgroundColor = "grey";
    document.getElementById("local7").style.backgroundColor = "grey";
    document.getElementById("local8").style.backgroundColor = "grey";
    document.getElementById("local9").style.backgroundColor = "grey";

    document.getElementById("local1").innerHTML = "";
    document.getElementById("local2").innerHTML = "";
    document.getElementById("local3").innerHTML = "";
    document.getElementById("local4").innerHTML = "";
    document.getElementById("local5").innerHTML = "";
    document.getElementById("local6").innerHTML = "";
    document.getElementById("local7").innerHTML = "";
    document.getElementById("local8").innerHTML = "";
    document.getElementById("local9").innerHTML = "";
}

reset.addEventListener("click", function () {
    setDefault();
    clearField();
    firstTurn = Math.floor(Math.random() * 11);
    if (firstTurn > 5) {
        currentCell = Math.floor(Math.random() * 9 + 1);
        firstComputer = true;
        message.innerText = "Первый ход - Компьютер";
        computerStep();
    }
}
);