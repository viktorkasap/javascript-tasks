// With memorize args and call each of args

function throttle2(func, ms) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;

      return;
    }

    func.apply(this, args);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// Test
function baz(time) {
  console.log(Math.floor((Date.now() - time) / 1000) + 's');
}

const now = Date.now();
const fn1000 = throttle2(baz, 1000);

for (let i = 0; i < 10; i += 1) {
  setTimeout(() => {
    fn1000(now);
  }, i * 1000);
}

/**
 * TERMINAL ->
 * clear && npx ts-node src/throttling2.js
 */
