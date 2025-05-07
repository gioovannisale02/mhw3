document.getElementById('convert-btn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || isNaN(amount) || amount <= 0) {
        alert('Inserisci un importo valido');
        return;
    }

    const apiKey = 'secret';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result === "error") {
                alert('Errore nel recupero dei dati da ExchangeRate-API');
                return;
            }

            const rate = data.conversion_rates[toCurrency];
            if (!rate) {
                alert('Errore: valuta di destinazione non supportata.');
                return;
            }

            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('converted-amount').textContent = `${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Errore durante la conversione della valuta:', error);
            alert('Si è verificato un errore nel recupero dei dati');
        });
});
