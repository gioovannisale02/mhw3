document.addEventListener('DOMContentLoaded', () => {
    const dettagliContainer = document.getElementById('dettagli-prodotto');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
  
    if (!id) {
      dettagliContainer.innerHTML = '<p>Prodotto non trovato.</p>';
      return;
    }
  
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(prodotto => {
        dettagliContainer.innerHTML = `
        <img src="${prodotto.image}" alt="${prodotto.title}">
        <div class="info">
            <h3>${prodotto.title}</h3>
            <p>${prodotto.description}</p>
            <div class="price">$${prodotto.price}</div>
            <div class="buttons">
                <button class="more">Acquista</button>
                <button class="add-to-cart">Aggiungi al carrello</button>
            </div>
        </div>
    `;
      })
      .catch(err => {
        console.error(err);
        dettagliContainer.innerHTML = '<p>Errore nel caricamento del prodotto.</p>';
      });
  });
  