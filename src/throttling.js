/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-this-alias, @typescript-eslint/strict-boolean-expressions */

function throttle(func, limit) {
  let inThrottle = false;

  return function () {
    const args = arguments;

    if (!inThrottle) {
      inThrottle = true;
      func.apply(this, args);
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.addEventListener(
  'scroll',
  throttle(() => {
    console.log('Scroll event handler call at most every 100ms');
  }, 100),
);
