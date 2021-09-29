const initialPrice = document.querySelector("#initial-price");
const noOfStocks = document.querySelector("#no-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector(".output");
outputDiv.style.display = "none";




checkBtn.addEventListener("click", function pnlCalculator() {

    var ip = Number(initialPrice.value);
    var curr = Number(currentPrice.value);
    var qty = Number(noOfStocks.value);

    if ((curr === 0) || (ip === 0) || (qty === 0)) {
        outputDiv.innerText = "You need to Specify the Values.";
        outputDiv.style.display = "block";

    } else if (ip > curr) {
        var pnl = Math.trunc((ip - curr) * qty);
        var pnlPercent = Math.trunc((pnl / (ip * qty)) * 100);
        outputDiv.innerText = "Your Loss is " + pnl + " and loss percentage is " + pnlPercent + "%." + " Should have done your own Research.";
        outputDiv.style.display = "block";
        outputDiv.style.backgroundColor = "Red";
        outputDiv.style.color = "rgb(51, 150, 255)";

    } else if (curr > ip) {
        var pnl = Math.trunc((curr - ip) * qty);
        var pnlPercent = Math.trunc((pnl / (ip * qty)) * 100);
        outputDiv.innerText = "Your Profit is " + pnl + "  and profit percentage is " + pnlPercent + "%." + " Sharmaji was Right.";
        outputDiv.style.display = "block";
        outputDiv.style.backgroundColor = "Green";
        outputDiv.style.color = "rgb(51, 150, 255)";

    } else {
        outputDiv.innerText = "You were wrong about F.D."
        outputDiv.style.display = "block";
    }
});