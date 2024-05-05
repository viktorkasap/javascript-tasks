// With memorize args and call each of args

function throttle2(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;

      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// Test
function baz(a) {
  console.log(a);
}

const fn1000 = throttle2(baz, 1000);

for (let i = 0; i < 10; i += 1) {
  const delay = i;
  setTimeout(() => fn1000(i), delay * 1000);
}

/**
 * TERMINAL ->
 * clear && npx ts-node src/throttling2.js
 */
