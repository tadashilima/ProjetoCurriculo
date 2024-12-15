// Funções utilitárias
export function domReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

export function handleError(error) {
  console.error('Erro:', error.message);
}