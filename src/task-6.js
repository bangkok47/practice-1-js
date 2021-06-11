export default function getStats(data) {
  if (!data.length)
    return {
      max: null,
      min: null,
      avg: null,
    };

  const min = Math.min(...data);
  const max = Math.max(...data);
  const avg = data.reduce((a, b) => a + b) / data.length;

  return {
    max: max,
    min: min,
    avg: avg,
  };
}

/* 
мин и макс можно еще найти с помощью reduce 
const min = data.reduce((acc, el) => acc < el ? acc : el)
const max = data.reduce((acc, el) => acc > el ? acc : el)



*/
