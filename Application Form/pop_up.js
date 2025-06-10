  const openModalBtn = document.getElementById('start_application');
  const closeModalBtn = document.getElementById('closeModal');
  const modalOverlay = document.getElementById('modalOverlay');

  openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('show')
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('show');
    }
  });