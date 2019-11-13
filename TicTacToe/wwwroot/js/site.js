// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "it is player " + turn + "'s turn";
}

function setWinner() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + turn + " has Won";
    var cells = document.getElementsByClassName("square");
    for (i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", onClick);
    }
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        else {
            turn = "x";
        }
        if (checkForWin()) setTurn();
    }
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");
    // horizontal
    for (var i = 0; i < 9; i += 3)
    {
        if (cells[i].innerText !== "" && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0])
            return true;
        }
    }
    // vertical
    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText !== "" && cells[0 + i].innerText === cells[3 + i].innerText && cells[3 + i].innerText === cells[6 + i].innerText) {
            setWinner(cells[0])
            return true;
        }
    }
    // left diagonal
    if (cells[i].innerText !== "" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[0])
        return true;
    }

    // right diagonal
    if (cells[i].innerText !== "" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[0])
        return true
    }
    return false;
}

    
    

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();

var form = document.getElementById("board");
var cells = document.getElementsByClassName("cell");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}