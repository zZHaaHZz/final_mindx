const btnStart = document.getElementById("btn-start");
const btnEnd = document.getElementById("btn-end");
const popupWin = document.getElementById("win");
const empty = document.getElementById("title-12");

let movesCount = 0;
let win = false;

let winTimer = null;
let row = 3;
let col = 4;

btnStart.addEventListener("click", () => {
    btnStart.style.display = "none";
    btnEnd.style.display = "block";
    movesCount = 0;

    
    row = 3;   
    col = 4; 
    empty.style.gridRow = row;
    empty.style.gridColumn = col;

    startTime();
    document.addEventListener("keydown", countKey);


    // sau 5 giay se fix cung la win
    winTimer = setTimeout(() => {
        win = true;
        btnEnd.style.display = "none";
        btnStart.style.display = "block";
        showWin();
    }, 5000);
});


btnEnd.addEventListener("click", () => {
    btnEnd.style.display = "none";
    btnStart.style.display = "block";

    endTime();

    clearTimeout(winTimer);
    winTimer = null;

    document.removeEventListener("keydown", countKey);
    addHistory(movesCount);
});



function countKey(e) {
    const validKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"];
    if (!validKeys.includes(e.key)) return;

    movesCount++;

    console.log(`Key pressed: ${e.key}, Step: ${movesCount}`);

    if (e.key === "ArrowUp" || e.key === "w") {
        if (row > 1) row--;
    }
    if (e.key === "ArrowDown" || e.key === "s") {
        if (row < 3) row++;
    }
    if (e.key === "ArrowLeft" || e.key === "a") {
        if (col > 1) col--;
    }
    if (e.key === "ArrowRight" || e.key === "d") {
        if (col < 4) col++;
    }

    empty.style.cssText = `
        grid-row: ${row};
        grid-column: ${col};
    `;
}

function showWin() {
    endTime();

    clearTimeout(winTimer);
    winTimer = null;

    document.removeEventListener("keydown", countKey);
    addHistory(movesCount);

    popupWin.style.display = "block";
    btnStart.style.display= "none";
    btnEnd.style.display= "none";

    //hien thi thong bao win trong 3 giay
    setTimeout(() => {
        popupWin.style.display = "none"
        btnStart.style.display= "block";
    }, 3000);
}