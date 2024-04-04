const botao = document
.querySelector('.btn-plataforma');

const elementoplataformas = document
.querySelector('.btn-plataforma .plataformas');

botao.addEventListener('click', () => {  
    elementoplataformas.classList.toggle('ativo');
    }
);