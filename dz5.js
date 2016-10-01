 


/*1. Написать функцию преобразования цвета из 10-ного представления в 16-ный. 
Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.*/


function deuASetze(r,g,b){
    function rgbToHex(deu){
        if (isNaN(deu)){
            return console.log ('Ошибка: указанное значение не является числом');
        } else if(deu>255||deu<0) {
            return console.log ('Ошибка: допустимый диапазон 0-255');
        } else {
            return deu > 15 ? deu.toString(16) : '0' + deu.toString(16);
        }
    }
    var rgb=[rgbToHex(r),rgbToHex(g),rgbToHex(b)]
  return rgb
}
console.log(deuASetze(25,136,235));


/*2. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с 
помощью console.log и вернуть пустой объект.*/


function numToObj(num){
    if (isNaN(num)){
      console.log ('Ошибка: указанное значение не является числом');
    } else if (num>999 || num<0){
        console.log ('Ошибка: допустимый диапазон 0-999');
      var obj={};
      return obj;
    } else {
        var digits=['единицы','десятки','сотни'];
      var obj={};
      var i=0;
      for(var i=0; num!=0; i++){
        obj[digits[i]]=num%10;
        num=(num-num%10)/10;
        }
        }   
        return obj;
    }
console.log(numToObj(400));
console.log(numToObj(369));
console.log(numToObj(23));


/*3. Реализовать функцию objectToQueryString(object), 
которая принимает аргументом объект, возвращает строку.*/

function objectToQueryString(obj){
    return Object.keys(obj).map(function(key) { return key + '=' + obj[key]; }).join('&');
};
console.log(objectToQueryString({user: 'Joan'}));
console.log(objectToQueryString({user: 'Joan', password: 'pass'}));
console.log(objectToQueryString({user: 'Joan', password: 'pass', id:1}));

