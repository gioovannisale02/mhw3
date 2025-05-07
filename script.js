
const profilo = document.querySelector(".profilo");

const dropdownMenu = document.createElement("div");
dropdownMenu.classList.add("dropdown-menu");
dropdownMenu.innerHTML = `
    <ul>
        <li><a href="#">I tuoi ordini</a></li>
        <li><a href="#">Le tue informazioni</a></li>
        <li><a href="#">Impostazioni account</a></li>
    </ul>
`;
profilo.appendChild(dropdownMenu);

function mostraMenu() {
    dropdownMenu.style.display = "block";
}
profilo.addEventListener("mouseenter", mostraMenu);


function nascondiMenu() {
    dropdownMenu.style.display = "none";
}
profilo.addEventListener("mouseleave", nascondiMenu);









const boxes = document.querySelectorAll('.box');
const nuovaImmagine = 'assets/logo.svg';

function cambiaImmagine(box) {
    const img = box.querySelector('img');
    img.src = nuovaImmagine;
}

function ripristinaImmagine(box) {
    const img = box.querySelector('img');
    img.src = img.dataset.originalSrc;
}


function salvaImmagineOriginale(box) {
    const img = box.querySelector('img');
    if (!img.dataset.originalSrc) {
        img.dataset.originalSrc = img.src;
    }
}


boxes.forEach(function(box) {
    salvaImmagineOriginale(box);
    box.addEventListener('mouseenter', function() {
        cambiaImmagine(box);
    });

    box.addEventListener('mouseleave', function() {
        ripristinaImmagine(box);
    });
});



profilo.setAttribute("data-utente", "Giovanni");
console.log(profilo.dataset.utente);



