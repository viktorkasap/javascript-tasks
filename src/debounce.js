/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-argument */
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Пример использования
window.addEventListener(
  'resize',
  debounce(() => {
    console.log('Resize event handler call after 200ms of no resize events');
  }, 200),
);
