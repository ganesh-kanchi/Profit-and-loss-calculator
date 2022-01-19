const initialPrice = document.querySelector("#initial-price");
const noOfStocks = document.querySelector("#no-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector(".output");
outputDiv.style.display = "none";

checkBtn.addEventListener("click", () => {

    var ip = Number(initialPrice.value);
    var curr = Number(currentPrice.value);
    var qty = Number(noOfStocks.value);
    outputDiv.style.color = "rgb(51, 150, 255)";
    outputDiv.style.paddingLeft = "1rem";
    outputDiv.style.paddingRight = "1rem";

    var pnl = (ip > curr) ? Math.trunc((ip - curr) * qty) : (curr > ip) && Math.trunc((curr - ip) * qty);
    var pnlPercent = Math.trunc((pnl / (ip * qty)) * 100);
    outputDiv.innerText = ((curr === 0) || (ip === 0) || (qty === 0)) 
        ? "You need to Specify the Values." 
            : (ip > curr) 
        ? `Your Loss is ${pnl} and loss percentage is ${pnlPercent}%. Should have done your own Research.` 
            : (curr > ip) 
        ? `Your Profit is ${pnl}  and profit percentage is ${pnlPercent}%. Sharmaji were Right.` 
            : "You were wrong about F.D. ";
    outputDiv.style.display = "block";
    outputDiv.style.backgroundColor = (ip > curr) ? "Red" : (curr > ip) && "Green";
});