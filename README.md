1
let x;
console.log('1. typeof x:', typeof x); // "undefined"
обьявляем переменную, но не присваиваем значение 

2
console.log('2. typeof 10:', typeof 10, 'typeof "10":', typeof "10"); // "number"  // "string"

3
console.log('3. typeof true:', typeof true, 'typeof false:', typeof false); // "boolean" // "boolean"

4
console.log('4. typeof null:', typeof null); // "object"

5
console.log('5. "15" + 1 =', "15" + 1); // "151" 

6
console.log('6. "12" - 1 =', "12" - 1); // 11

7
console.log('7. Boolean("") =', Boolean("")); // false 

8
console.log('8. Boolean(" ") =', Boolean(" ")); // true

9
console.log('9. +" 13 " =', +" 13 ");
console.log('   Number(" 13 ") =', Number(" 13 "));
console.log('   parseInt(" 13 ") =', parseInt(" 13 ")); // 13 

10
function isNumber(v) {
    return typeof v === 'number' && !isNaN(v); // Проверяем: 1) тип - number, 2) не NaN
