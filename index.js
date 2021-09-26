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

    if (curr === 0) {
        outputDiv.innerText = "You need to Specify the Values.";
        outputDiv.style.display = "block";
    } else if (ip === 0) {
        outputDiv.innerText = "You need to Specify the Values.";
        outputDiv.style.display = "block";
    } else if (qty === 0) {
        outputDiv.innerText = "You need to Specify the Values.";
        outputDiv.style.display = "block";
    } else if (ip > curr) {
        var pnl = (ip - curr) * qty;
        var pnlPercent = ((pnl / (ip * qty)) * 100);
        outputDiv.innerText = "your Loss is " + pnl + " and loss percentage is " + pnlPercent + "%." + " Should have done your own Research.";
        outputDiv.style.display = "block";
    } else if (curr > ip) {
        var pnl = (curr - ip) * qty;
        var pnlPercent = ((pnl / (ip * qty)) * 100);
        outputDiv.innerText = "your Profit is " + pnl + "  and profit percentage is " + pnlPercent + "%." + " Sharmaji was Right.";
        outputDiv.style.display = "block";
    } else {
        outputDiv.innerText = "you were wrong about F.D."
        outputDiv.style.display = "block";
    }
});