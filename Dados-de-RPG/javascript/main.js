let finalResult = document.querySelector("#final-result");
const Lançar = document.querySelector("#Lançar");

function RandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Lançar.onclick = () => {
    finalResult.textContent = RandomInteger(1, 20);   
}
