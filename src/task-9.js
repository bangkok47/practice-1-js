export default function merge(data) {
  const result = {};

  data.forEach((obj) => {
    for (let prop in obj) {
      if (prop in result) {
        result[prop].push(obj[prop]);
      } else {
        result[prop] = [obj[prop]];
      }
    }
  });
  return result;
}

/* 
1. Циклом forEach пробегаемся по каждому  массивy. 
2. Циклом for..in мы пробегаемся по ел обьектов.
3. Далее смотрим, если эти свойства есть в переменной result, то в резалт [свойства] мы пушим свойства обьекта obj[prop];
Иначе свойсвам резалт присваеваем свойства обьекта.

*/
