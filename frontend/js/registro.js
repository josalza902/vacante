const tipoCards = document.querySelectorAll('.tipo-card');

tipoCards.forEach(card => {
  card.addEventListener('click', () => {
    tipoCards.forEach(c => c.classList.remove('activo'));
    card.classList.add('activo');
  });
});