const countTime = document.getElementById("count-time")
let timer = null;
let seconds = 0;

function startTime() {
    seconds = 0;
    upDateTime()

    timer = setInterval(() => {
        seconds++;
        upDateTime()
    }, 1000)
}

function endTime() {
    clearInterval(timer);
}
function upDateTime() {
    
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");

    countTime.innerText = `${minutes}:${sec}`;
}