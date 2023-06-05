const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#resultado');
const btn = document.querySelector('.btnCalcular');
const pResult = document.querySelector('.result');

form.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    console.log(parseInt(input1.value) + parseInt(input2.value));
    input3.value = parseInt(input1.value) + parseInt(input2.value);
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "El resultado es: " + sumaInputs;
}
