let x; console.log('1. typeof x:', typeof x); // "undefined" обьявляем переменную, но не присваиваем значение

console.log('2. typeof 10:', typeof 10, 'typeof "10":', typeof "10"); // "number" // "string"

console.log('3. typeof true:', typeof true, 'typeof false:', typeof false); // "boolean" // "boolean"

console.log('4. typeof null:', typeof null); // "object"

console.log('5. "15" + 1 =', "15" + 1); // "151"

console.log('6. "12" - 1 =', "12" - 1); // 11

console.log('7. Boolean("") =', Boolean("")); // false

console.log('8. Boolean(" ") =', Boolean(" ")); // true

console.log('9. +" 13 " =', +" 13 "); console.log(' Number(" 13 ") =', Number(" 13 ")); console.log(' parseInt(" 13 ") =', parseInt(" 13 ")); // 13

function isNumber(v) { return typeof v === 'number' && !isNaN(v)}; // Проверяем: 1) тип - number, 2) не NaN