import { initializeCarousel } from './src/js/carousel.js';
import { initializeModal } from './src/js/modal.js';
import { initializeSmoothScroll } from './src/js/scroll.js';
import { domReady, handleError } from './src/js/utils.js';

// Inicialização principal
domReady(() => {
  try {
    initializeCarousel();
    initializeModal();
    initializeSmoothScroll();
  } catch (error) {
    handleError(error);
  }
});