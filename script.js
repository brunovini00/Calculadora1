const display = document.getElementById('disp');
const alternarTema = document.getElementById('theme');
const body = document.getElementById('body_1');

let valorAtual = "";

function inserirNumero(value) {
    valorAtual += value;
    display.value = valorAtual;
}

function calcular() {
    try {
        valorAtual = eval(valorAtual)
        display.value = valorAtual
    } catch (e) {
        display.value = "Erro"
        valorAtual = "";
    }
}

function apagarUltimo() {
    valorAtual = valorAtual.slice(0, -1);
    display.value = valorAtual;
}

function limpar() {
    valorAtual = "";
    display.value = valorAtual;
}

alternarTema.addEventListener("change", () => {
    if (alternarTema.checked) {
        body.classList.remove("theme__1");
        body.classList.add("theme__2");
    } else {        
        body.classList.remove("theme__2");
        body.classList.add("theme__1");
    }
});