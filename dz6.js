 
/*1. Напишите две функции, reverseArray и reverseArrayInPlace. 
Первая получает массив как аргумент и выдаёт новый массив, 
с обратным порядком элементов. Вторая работает как оригинальный 
метод reverse – она меняет порядок элементов на обратный в том массиве, 
который был ей передан в качестве аргумента. Не используйте стандартный метод reverse*/


console.log(reverseArray(["uno", "dos", "tres", "cuatro"]));

var mas = [1, 2, 3, 4];
reverseArrayInPlace(mas);
console.log(mas);


/*2. Реализовать функцию pick(obj, keys), которая принимает аргументами 
объект и массив строк (названия ключей). Возвращает новый объект, 
куда вошли все ключи, указанные в массиве keys, и соответствующие значения 
из объекта obj. Если в объекте obj, нет ключа, указанного в массиве keys, 
в результирующем объекте этот ключ не должен присутствовать.*/


var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}
pick(user, ['name']); // {name: 'Sergey'}
pick(user, ['name', 'second-name']); // {name: 'Sergey'}
pick(user, ['name', 'friends']); // {name: 'Sergey', friends:['Sveta', 'Artem']} */

function pick(obj, keys) {
    var newObj = {};
        for (var i = 0; i < keys.length; i += 1) {
            if (obj[keys[i]] || obj[keys[i]] === 0) {
                newObj[keys[i]] = obj[keys[i]];
            }
        }
    return newObj;
}



