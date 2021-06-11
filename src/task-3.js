export default function sumDigits(n) {
  let arr = Array.from(String(n));
  return arr.reduce((x, y) => x + Number(y), 0);
}

/* 
  1. Преобразовуем число в массив
  2. С помощью редьюс сумируем + преобразовуем каждый елем в число.
*/
