/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-argument */
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// window.addEventListener(
//   'resize',
//   debounce(() => {
//     console.log('Resize event handler call after 200ms of no resize events');
//   }, 200),
// );

const debounceFn = (x) => {
  console.log('Hahha', x);
};

const debouncedFn = debounce(debounceFn, 1000);
debouncedFn('Ololo');

/**
 * TERMINAL ->
 * clear && npx ts-node src/debounce.js
 */
