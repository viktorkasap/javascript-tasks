/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-this-alias, @typescript-eslint/strict-boolean-expressions */

function throttle(func, limit) {
  let inThrottle;

  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
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
