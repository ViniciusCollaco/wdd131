const anoAtualSpan = document.getElementById("anoatual");
const anoVigente = new Date().getFullYear();
anoAtualSpan.textContent = anoVigente;

const ultimaModificacaoParagrafo = document.getElementById("ultimaModificacao");
ultimaModificacaoParagrafo.textContent = `Última modificação: ${document.lastModified}`;