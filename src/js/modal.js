// Gerenciamento do modal
export function initializeModal() {
  const modal = document.getElementById('modeloModal');
  const modalImg = document.getElementById('modalImage');
  const closeModal = document.querySelector('.close-modal');
  const modeloImages = document.querySelectorAll('.modelo-card img');

  if (!modal || !modalImg || !closeModal || !modeloImages.length) {
    console.warn('Elementos do modal não encontrados');
    return;
  }

  modeloImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}