function createSets() {
    const num = document.getElementById("setsNumber").value;
    const rows = Math.ceil(num / 5);
    // console.log(num, rows);
    let setCount = 1;
    let innerHtmlOfSets = "<table>";
    for (let row = 0; row < rows; row++) {
        innerHtmlOfSets += "<tr>";
        for (let col = 0; col < 5 && setCount <= num; col++) {
            innerHtmlOfSets += `<td class="notClicked" id="button${setCount}" onclick="changeClickStatus('${setCount}')">${setCount++}</td>`;
        }
        innerHtmlOfSets += "</tr>";
    }
    innerHtmlOfSets += "</table>"
    document.getElementById("sets").innerHTML = innerHtmlOfSets;
}

function changeClickStatus(buttonNumber = "") {
    const elementButton = document.getElementById("button" + buttonNumber);
    elementButton.className = (elementButton.className === "notClicked") ? "clicked" : "notClicked";
}
