document.getElementById('convert-btn').addEventListener('click', function() {
    const importo = document.getElementById('amount').value;
    const valutaOrigine = document.getElementById('from-currency').value;
    const valutaDestinazione = document.getElementById('to-currency').value;

    if (importo === '' || isNaN(importo) || importo <= 0) {
        alert('Inserisci un importo valido');
        return;
    }

    const chiaveApi = 'secret';
    const url = `https://v6.exchangerate-api.com/v6/${chiaveApi}/latest/${valutaOrigine}`;

    fetch(url)
        .then(risposta => risposta.json())
        .then(dati => {
            if (dati.result === "error") {
                alert('Errore nel recupero dei dati da ExchangeRate-API');
                return;
            }

            const tasso = dati.conversion_rates[valutaDestinazione];
            if (!tasso) {
                alert('Errore: valuta di destinazione non supportata.');
                return;
            }

            const importoConvertito = (importo * tasso).toFixed(2);
            document.getElementById('converted-amount').textContent = `${importoConvertito} ${valutaDestinazione}`;
        })
        .catch(errore => {
            console.error('Errore durante la conversione della valuta:', errore);
            alert('Si è verificato un errore nel recupero dei dati');
        });
});
