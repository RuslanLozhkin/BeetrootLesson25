//Home Task Lesson 25: Functions
/*
1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 
   1 – если первое больше, чем второе; и 0 – если числа равны.


2. Написать функцию, которая вычисляет факториал переданного ей числа.


3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
   Например: цифры 1, 4, 9 превратятся в число 149.


4. Написать функцию, которая принимает длину и ширину прямоугольника 
   и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
   Совершенное число – это число, равное сумме всех своих собственных делителей.


6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
   и выводит только те числа из диапазона, которые являются совершенными. 
   Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 


7. Написать функцию, которая принимает время (часы, минуты, секунды) 
   и выводит его на экран в формате «чч:мм:сс».
   Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.


8. Написать функцию, которая принимает часы, минуты 
   и секунды и возвращает это время в секундах.


9. Написать функцию, которая принимает количество секунд, 
   переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».


10.Написать функцию, которая считает разницу между датами. 
   Функция принимает 6 параметров, которые описывают 2 даты, 
   и возвращает результат в виде строки «чч:мм:сс». 
   При выполнении задания используйте функции из предыдущих 2-х заданий: 
   сначала обе даты переведите в секунды, узнайте разницу в секундах, 
   а потом разницу переведите обратно в «чч:мм:сс»
*/

//Task1
/*
Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 
1 – если первое больше, чем второе; и 0 – если числа равны.

let compare = (a, b) =>{
    if (a < b) return -1;
    if (a > b) return 1;
    if (a == b) return 0;
};
const a = +prompt('Enter first number',0);
const b = +prompt('Enter second number',0);
console.log(compare(a, b));
*/

//Task2 Написать функцию, которая вычисляет факториал переданного ей числа.
/*
const n = +prompt('Enter a number',0);

let factorial = (num) =>{
    let s = 1;
    for(let i = 1; i <= num; i++){
        s *= i;
    }
    return s;
};
console.log(factorial(n));
*/

//Task3
/*
Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
Например: цифры 1, 4, 9 превратятся в число 149.

const n1 = prompt('Enter first number',0);
const n2 = prompt('Enter second number',0);
const n3 = prompt('Enter third number',0);

function numMerger (n1, n2, n3){
    num = n1.toString() + n2.toString() + n3.toString();
    return num;
}
console.log(numMerger(n1, n2, n3));
*/

//Task4
/*
Написать функцию, которая принимает длину и ширину прямоугольника 
и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

const a = +prompt('Enter a number', 0);
const b = +prompt('Enter a number', a);

let area = (side1, side2 = side1) => side1 * side2;

console.log(area(a, b));
*/

//Task5
/*
Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
Совершенное число – это число, равное сумме всех своих собственных делителей.

const n = +prompt('Enter a number',0);

let perfect = (num) => {
    let s = 0;
    for (let i = 0; i <= num; i++){
        if(num % i == 0){
            s += i;
        }
    }
    if(num == s) return console.log('This number is perfect');
    else return console.log('This number is not perfect');
};
perfect(n);
*/

//Task6
/*
Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
и выводит только те числа из диапазона, которые являются совершенными. 
Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

const start = +prompt('Enter start of range', 0);
const end = +prompt('Enter end of range', 100);

let perfectInRange = (a, b) => {
    for (let i = a; i <= b; i++){
        let s = 0;
        for(let j = 0; j < i; j++){
            if(i % j == 0){
                s += j;
            }
        }
        if(i == s){
            console.log(i);
        }
    }
};
perfectInRange(start, end);
*/

//Task7
/*
Написать функцию, которая принимает время (часы, минуты, секунды) 
и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

let time = (h) =>{
    function zero (n){
        return n > 9 ? n : '0' + n;
    }
    return (m = 0) => {
        return(s = 0) =>`${zero(h)}:${zero(m)}:${zero(s)}`;
    };
};
console.log(time(9)()());
console.log(time(10)()());
*/

//Task8
/*
Написать функцию, которая принимает часы, минуты 
и секунды и возвращает это время в секундах.

let time = (h) =>{
    function multiply60 (n){
        return n * 60;
    }
    return (m = 0) => {
        return(s = 0) =>`${+multiply60(multiply60(h)) + +multiply60(m) + s}`;
    };
};
console.log(time(9)(18)());
console.log(time(10)()());
*/

//Task9
/*
Написать функцию, которая принимает количество секунд, 
переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

const seconds = prompt('Enter count of seconds', 32400);

let time = (n) => {
    let hoursFloat = n / 3600;
    console.log(hoursFloat);
    let hours = Math.floor(hoursFloat);
    console.log(hours);
    let minutes = Math.floor((hoursFloat - hours) * 60);
    console.log(minutes);
    let seconds  = n - ((minutes * 60) + (hours * 3600));
    function zero (num){
        return num > 9 ? num : '0' + num;
    }
    return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
}
console.log(time(seconds));
*/

//Task10
/*
Написать функцию, которая считает разницу между датами. 
Функция принимает 6 параметров, которые описывают 2 даты, 
и возвращает результат в виде строки «чч:мм:сс». 
При выполнении задания используйте функции из предыдущих 2-х заданий: 
сначала обе даты переведите в секунды, узнайте разницу в секундах, 
а потом разницу переведите обратно в «чч:мм:сс»


let dateDiff = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) =>{
    if (h == 0){
        h = 24;
    }
    let seconds = h * 60 * 60 + m * 60 + s;
    let seconds1 = h1 *60 * 60 + m1 * 60 + s1;
    let secDiff = Math.abs(seconds1 - seconds);
    function time(n) {
        let hoursFloat = n / 3600;
        let hours = Math.floor(hoursFloat);
        let minutes = Math.floor((hoursFloat - hours) * 60);
        let seconds  = n - ((minutes * 60) + (hours * 3600));
        function zero (num){
            return num > 9 ? num : '0' + num;
        }
        return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
    }
    return time(secDiff);
};
console.log(dateDiff(0,10,0,10,0,0));
*/