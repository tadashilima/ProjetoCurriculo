// Animação de scroll suave
export function initializeSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  
  if (!anchors.length) {
    return;
  }

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}