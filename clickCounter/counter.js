let btnEl = document.querySelector(".btn-main");
let countDisplay = document.querySelector("h2");
let resetBtn = document.querySelector(".btn-small");

let count = 0;

btnEl.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
})

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
})

