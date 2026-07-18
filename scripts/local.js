document.addEventListener("DOMContentLoaded", () => {
    const anoAtualSpan = document.getElementById("anoatual");
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    const ultimaModificacaoParagrafo = document.getElementById("ultimaModificacao");
    if (ultimaModificacaoParagrafo) {
        ultimaModificacaoParagrafo.textContent = `Última modificação: ${document.lastModified}`;
    }

    const tempElement = document.getElementById("temp-val");
    const windElement = document.getElementById("wind-val");
    const windChillElement = document.getElementById("windchill");

    if (tempElement && windElement && windChillElement) {
        const t = parseFloat(tempElement.textContent);
        const v = parseFloat(windElement.textContent);

        if (t <= 10 && v > 4.8) {
            const sensacao = calcularSensacaoTermica(t, v);
            windChillElement.textContent = `${sensacao.toFixed(1)} °C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + (0.6215 * temperatura) - (11.37 * Math.pow(velocidadeVento, 0.16)) + (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16));
}