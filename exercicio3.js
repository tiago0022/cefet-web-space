botoesExpandir = document.querySelectorAll('.botao-expandir-retrair');


botoesExpandir.forEach(function (botao) {
    botao.addEventListener('click', function (evento) {
        const expandiu = evento.currentTarget.parentNode.classList.toggle('expandido');
        evento.currentTarget.innerHTML = expandiu ? '-' : '+';
    });
});
