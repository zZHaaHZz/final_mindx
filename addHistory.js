function addHistory(movesCount) {
    
    const historyBox = document.getElementById("historyStepAndTime");

    const turn = historyBox.children.length + 1;
    const time = countTime.innerText;

    const div = document.createElement("div");
    div.classList.add("history-item");
    div.innerHTML = `
        <h2>${turn}</h2>
        <h2>${movesCount}</h2>
        <h2>${time}</h2>
    `;

    historyBox.appendChild(div);
}