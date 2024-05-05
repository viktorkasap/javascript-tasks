/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-this-alias, @typescript-eslint/strict-boolean-expressions */

function throttle(func, limit) {
  let inThrottle = false;

  return function () {
    if (!inThrottle) {
      inThrottle = true;
      func.apply(this, arguments);
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Test
// window.addEventListener(
//   'scroll',
//   throttle(() => {
//     console.log('Scroll event handler call at most every 100ms');
//   }, 100),
// );

function baz(a) {
  console.log(a);
}

const fn1000 = throttle(baz, 1000);

for (let i = 0; i < 10; i += 1) {
  const delay = i;
  setTimeout(() => fn1000(i), delay * 1000);
}

/**
 * TERMINAL ->
 * clear && npx ts-node src/throttling.js
 */
