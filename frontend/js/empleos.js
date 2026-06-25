const cards = document.querySelectorAll('.empleo-card');
const filtroCat = document.getElementById('filtro-categoria');
const filtroTipo = document.getElementById('filtro-tipo');
const filtroPais = document.getElementById('filtro-pais');
const contador = document.getElementById('contador');

function filtrar() {
  const cat = filtroCat.value.trim();
  const tipo = filtroTipo.value.trim();
  const pais = filtroPais.value.trim();
  let visibles = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-categoria');
    const cardTipo = card.getAttribute('data-tipo');
    const cardPais = card.getAttribute('data-pais');

    console.log('Comparando:', cardCat, cat, cardTipo, tipo, cardPais, pais);

    const matchCat = cat === '' || cardCat === cat;
    const matchTipo = tipo === '' || cardTipo === tipo;
    const matchPais = pais === '' || cardPais === pais;

    if (matchCat && matchTipo && matchPais) {
      card.style.display = 'block';
      visibles++;
    } else {
      card.style.display = 'none';
    }
  });

  contador.textContent = visibles + ' resultados';
}

function verDetalle() {
  alert('Próximamente: detalle del empleo');
}

filtroCat.addEventListener('change', filtrar);
filtroTipo.addEventListener('change', filtrar);
filtroPais.addEventListener('change', filtrar);

filtrar();