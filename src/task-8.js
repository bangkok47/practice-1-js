export default function getTopLetter(str) {
  const arr = new Map();
  let count = 0;
  let letter = '';

  [...str].filter((el) => {
    if (!arr.has(el)) {
      arr.set(el, 1);
    } else {
      arr.set(el, arr.get(el) + 1);
    }
  });

  arr.forEach((value, key) => {
    if (value > count) {
      count = value;
      letter = key;
    }
  });

  return letter;
}
