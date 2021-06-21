const botaoCalcular = document.querySelector('#calcular');
const constante = document.querySelector('#constante');
const massa1 = document.querySelector('#massa1');
const massa2 = document.querySelector('#massa2');
const distancia = document.querySelector('#distancia');
const fGrav = document.querySelector('#resultado');

botaoCalcular.addEventListener('click', function () {
    const numerador = constante.value * massa1.value * massa2.value
    const denominador = distancia.value ** 2
    const forcaGravitacional = numerador / denominador
    fGrav.value = forcaGravitacional
});