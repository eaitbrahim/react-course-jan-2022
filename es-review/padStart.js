const str = '5';

console.log(str.padStart(2, '0'));

const fullNumber = '201345678987654321';
const lastFourDigits = fullNumber.slice(-4);
console.log(lastFourDigits);
const maskednumber = lastFourDigits.padStart(fullNumber.length, '*');

console.log(maskednumber);

console.log(fullNumber.length, maskednumber.length);