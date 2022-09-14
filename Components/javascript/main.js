const finalResult = document.querySelector("#final-result");
const lançar = document.querySelector("#Lançar");

function RandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function themeChanger () {
    const themes = document.querySelectorAll(".theme-icon");
    const background = document.querySelector("body");
    const options = document.querySelectorAll(".options-text");



    for(let index = 0; index < themes.length; index++) {
       const theme = themes[index];

        theme.onclick = () => {
            background.style.backgroundColor = theme.value;
        }
    }
    if (background.style.backgroundColor == "#202020") {
        options[0].textContent = "white";
    }
}

const dices = document.querySelectorAll('[data-side]');

function diceChanger () {
    for (let index = 0; index < dices.length; index++) {
        const dice = dices[index];
        const diceValue = dice.getAttribute('data-side');
        const THEdice = document.querySelector(".THEdice");

        dice.onclick = () => {
            THEdice.setAttribute('src',  `images/tipo-de-dado/d${diceValue}.png`);
            finalResult.textContent = RandomInteger(1, diceValue);
        }
    }
}

const diceSelect = document.querySelector("#NumberOfSides");

diceSelect.onclick = () => {
    const selectedOption = diceSelect.options[diceSelect.selectedIndex].getAttribute('data-side');

    lançar.onclick =  () => {
        finalResult.textContent = RandomInteger(1, selectedOption)
    }
}

diceChanger()
themeChanger()
