!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');document.querySelector('button[type="submit"]').addEventListener("click",(function(n){n.preventDefault();var t=1,o=setTimeout((function(){var n=setInterval((function(){promiseDelay=Number(i.value)+t*Number(c.value),function(n,t){new Promise((function(o,r){Math.random()>.3?(o("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))):(r("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms")))}))}(t,promiseDelay),++t>Number(a.value)&&(clearInterval(n),clearTimeout(o))}),c.value)}),i.value)}))}();
//# sourceMappingURL=03-promises.c58d4ae4.js.map