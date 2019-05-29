Object.defineProperty(exports, '__esModule', {
  value: true
});
const _arguments = arguments;

exports.default = function(func, wait, immediate) {
  let timeout = void 0;
  return function() {
    let context,
      args = _arguments;
    const later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
