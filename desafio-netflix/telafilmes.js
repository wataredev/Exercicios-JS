document.addEventListener('DOMContentLoaded', () => {

    function inicializarCarrossel(carrossel) {
        const imagens = carrossel.querySelectorAll('img');
        const totalImagens = imagens.length;
        const imagensPorVisao = 7; // Ajuste conforme necessário
        const totalVisoes = Math.ceil(totalImagens / imagensPorVisao);
        let index = 0;

        function mostrarImagem(n) {
            const larguraCarrossel = carrossel.clientWidth;
            carrossel.style.transform = `translateX(${-n * larguraCarrossel}px)`;
        }

        const botoesDireita = carrossel.parentElement.querySelector('.seta.direita');
        const botoesEsquerda = carrossel.parentElement.querySelector('.seta.esquerda');

        botoesDireita.addEventListener('click', () => {
            index = (index + 1) % totalVisoes;
            mostrarImagem(index);
        });

        botoesEsquerda.addEventListener('click', () => {
            index = (index - 1 + totalVisoes) % totalVisoes;
            mostrarImagem(index);
        });

        mostrarImagem(index);
    }
    
    document.querySelectorAll('.carrossel').forEach(carrossel => {
        inicializarCarrossel(carrossel);
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});