export default function convertToRoman(n) {
  if (n <= 0 || !Number(n)) {
    throw new Error('incorrect number');
  }

  let roman = '';

  const digits = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (let num in digits) {
    while (n >= digits[num]) {
      roman += num;
      n -= digits[num];
    }
  }

  return roman;
}

/* 
1. Сперва делаем проверку что пришло число и число >=0;
2.Суть алгоритма в том что мы пробегаемся по значению обьекта и проверяем число которое мы конвертируем, например мы хотим конвертировать число 24 в XXIV, процесс след:
 

*/
