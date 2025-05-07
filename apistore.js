document.addEventListener("DOMContentLoaded", () => {
  const inputRicerca = document.querySelector('.ricerca input');
  const risultatiContainer = document.querySelector('.risultati-container'); 

  inputRicerca.addEventListener('input', () => {
    const query = inputRicerca.value.toLowerCase();

    if (query.length < 3) {
      risultatiContainer.innerHTML = '';
      risultatiContainer.classList.remove('show');
      return;
    }

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(prodotti => {
        const risultati = prodotti.filter(prodotto =>
          prodotto.title.toLowerCase().includes(query) ||
          prodotto.description.toLowerCase().includes(query)
        );

        risultatiContainer.innerHTML = '';

        if (risultati.length === 0) {
          risultatiContainer.innerHTML = '<p>Nessun prodotto trovato.</p>';
        } else {
          risultati.forEach(prodotto => {
            const card = document.createElement('div');
            card.className = 'risultato';
            card.innerHTML = `
              <a href="prodotto.html?id=${prodotto.id}">
                <img src="${prodotto.image}" alt="${prodotto.title}">
                <h3>${prodotto.title}</h3>
                <div class="price">$${prodotto.price}</div>
              </a>
            `;
            risultatiContainer.appendChild(card);
          });
        }

        risultatiContainer.classList.add('show');
      })
      .catch(errore => {
        console.error('Errore nel caricamento dei prodotti:', errore);
        risultatiContainer.innerHTML = '<p>Errore nel caricamento prodotti.</p>';
        risultatiContainer.classList.add('show');
      });
  });
});
