export default function formatTime(seconds) {
  let hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor(seconds / 60) - hours * 60;
  const sec = seconds % 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours > 12 ? hours - 12 : hours; // -12 from hours if it is greater than 12
  hours = hours == '00' ? 12 : hours; // if 00 then it is 12 am

  const formatted = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    sec.toString().padStart(2, '0'),
  ].join(':');

  const result = formatted + ' ' + ampm;

  return result;
}

/* 
hours - делим сек на 60 / 60 (60 сек в мин и 60 мин в часе) + округляем до ближайшего целого числа чтобы получить количество часов в int;

minutes - в мин 60 сек. sec / 60 и округляем Math.floor() до ближайшего целого числа. Это вернет все мин в hours. Далее hours * 60 чтобы получить его значение в мин, а далее вычитаем его из наштх мин, чтобы получить правильное значение.

sec - чтобы подсчитать сек, мы используем оператор остатка от деления. Он возвращает сумму, оставшуюся после деления на число. Далее seconds % 60 (количество сек в мин). Число которое мы получаем это сек после удаления всех минут.

Далее когда мы хотим вывести 0 в hours, или если мы получаем однозначные чила в мин и сек - тогда мы преобразовуем наши числа в строки и используем метод padStart() для обеспечения минимального количества цифр.
 formatted = [
  hours.toString().padStart(2, '0'),
  minutes.toString().padStart(2, '0'),
  seconds.toString().padStart(2, '0')
].join(':');

padStart - просто заменяет текущею строку другой строкой, так что итоговая строка достигает заданной долины. Заполняет слева. 2 - это 2 символа и '0' указали какие.


*/
