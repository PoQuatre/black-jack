export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function throttle(func, wait, options) {
  let context;
  let result;
  let timeout = null;
  let previous = 0;
  // eslint-disable-next-line no-param-reassign
  if (!options) options = {};
  // eslint-disable-next-line func-names
  const later = (args) => {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = null;
    }
  };
  // eslint-disable-next-line func-names
  return (...args) => {
    const now = Date.now();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    // eslint-disable-next-line prefer-rest-params
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
