const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        
        const isOpen = hamButton.classList.contains('open');
        hamButton.setAttribute('aria-expanded', isOpen);
    });
}

const anoAtualSpan = document.getElementById("anoatual");
if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
}

const ultimaModificacaoParagrafo = document.getElementById("ultimaModificacao");
if (ultimaModificacaoParagrafo) {
    ultimaModificacaoParagrafo.textContent = `Última modificação: ${document.lastModified}`;
}