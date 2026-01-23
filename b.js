// 1
let x; console.log(typeof x); // пустая переменная 
// 2
console.log(typeof 10);    // "number" - число 
console.log(typeof "10");  // "string" - строка 
// 3
console.log(typeof true);   // "boolean" - булевые данные 
console.log(typeof false);  // "boolean" - булевые данные 
// 4 
console.log(typeof null); // "object" - 
// 5 
console.log("15" + 1); // "151" - конкатенация строк
// 6 
console.log("12" - 1); // 11 -происходит арифметическая опирация вычитания 
// 7 
console.log(Boolean("")); // false - передаем пустую строку (ничего) 
// 8 
console.log(Boolean(" ")); // true мы передаем пробел, что считается символом 
// 9 
console.log(+" 13 "); // 13 -явное преобразование в число 
// 10 
function isNumber(v) {
    return typeof v === 'number' && !isNaN(v);
}
console.log(isNumber(1))