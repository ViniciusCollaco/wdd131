const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const anoAtualSpan = document.getElementById("anoatual");
const anoVigente = new Date().getFullYear();
anoAtualSpan.textContent = anoVigente;

const ultimaModificacaoParagrafo = document.getElementById("ultimaModificacao");
ultimaModificacaoParagrafo.textContent = `Última modificação: ${document.lastModified}`;