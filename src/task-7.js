export default function unique(data) {
  const toSet = new Set(data);
  const newArr = [...toSet];

  return newArr;
}
