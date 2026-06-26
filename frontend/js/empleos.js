// ── elementos ──────────────────────────────────────────────
const cards      = document.querySelectorAll('.empleo-card');
const filtroCat  = document.getElementById('filtro-categoria');
const filtroTipo = document.getElementById('filtro-tipo');
const filtroPais = document.getElementById('filtro-pais');
const contador   = document.getElementById('contador');

// ── lógica de filtrado ─────────────────────────────────────
function filtrar() {
  const cat  = filtroCat.value.trim();
  const tipo = filtroTipo.value.trim();
  const pais = filtroPais.value.trim();
  let visibles = 0;

  cards.forEach(card => {
    const matchCat  = cat  === '' || card.dataset.categoria === cat;
    const matchTipo = tipo === '' || card.dataset.tipo      === tipo;
    const matchPais = pais === '' || card.dataset.pais      === pais;

    card.style.display = (matchCat && matchTipo && matchPais) ? 'block' : 'none';
    if (matchCat && matchTipo && matchPais) visibles++;
  });

  contador.textContent = visibles + ' resultados';
}

// ── eventos de los selects ─────────────────────────────────
filtroCat.addEventListener('change',  filtrar);
filtroTipo.addEventListener('change', filtrar);
filtroPais.addEventListener('change', filtrar);

// ── leer URL al cargar (ej: ?categoria=tecnologia) ─────────
const params    = new URLSearchParams(window.location.search);
const catURL    = params.get('categoria');
const tipoURL   = params.get('tipo');
const paisURL   = params.get('pais');

if (catURL)  filtroCat.value  = catURL;
if (tipoURL) filtroTipo.value = tipoURL;
if (paisURL) filtroPais.value = paisURL;

// ── filtrado inicial (con o sin parámetros de URL) ─────────
filtrar();

// ── detalle ────────────────────────────────────────────────
function verDetalle() {
  alert('Próximamente: detalle del empleo');
}