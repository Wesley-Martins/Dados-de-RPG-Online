function RandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function themeChanger () {
    const theme = document.querySelector(".theme-icon");
    const background = document.querySelector("body");

    theme.onclick = () => {
        background.classList.toggle("dark");
    }
}

function shakeDice () {
    for (let i = 0; i < diceAndNumber.length; i++) {
        diceAndNumber[i].classList.remove('shake'); // reset animation
        void diceAndNumber[i].offsetWidth; // trigger reflow
        diceAndNumber[i].classList.add('shake'); // start animation
    }
}

function generateResult () {
    const diceResult = document.querySelectorAll(".dice-result");
    const selectedDice = diceSelect.options[diceSelect.selectedIndex].value;

    for(let i = 0; i < diceImage.length; i++) {
        diceImage[i].setAttribute("src", `/Components/images/tipo-de-dado/d${selectedDice}.png`);
        diceResult[i].textContent = RandomInteger(1, selectedDice);
    }
    
    shakeDice()
}

function addDice (val, newVal) {
    if (newVal < val) {
        for (let i = newVal; i < val; i++) {
            diceAndNumber[i].classList.add("hidden")
        }
    }
    else {
        for (let i = 0; i < val + 1; i++) {
            diceAndNumber[i].classList.remove("hidden")
        }
    }
    generateResult()
}
 
// constants
const diceAndNumber = document.querySelectorAll(".dice");
const diceImage = document.querySelectorAll(".diceImage");
const diceSelect = document.querySelector("#NumberOfSides");
const addSelect = document.querySelector("#NumberOfDices");
const lançar = document.querySelector("#lançar");

var selectedNumber = addSelect.selectedIndex;

lançar.onclick = () => {
    generateResult()
}

// update the select value
diceSelect.addEventListener("change", () => {
    generateResult();

    lançar.onclick = () => {
        generateResult()
    }
})

addSelect.addEventListener("change", () => {
    var selectedNumber = addSelect.selectedIndex;
    addDice(selectedNumber);

    addSelect.addEventListener("change", () => {
        var newValue = addSelect.selectedIndex;
        addDice(selectedNumber, newValue)
    })
})

// startup functions
themeChanger()
generateResult()
