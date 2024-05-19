// Обьявление функции (Function Decloration) 
// Иммя функции и ее предназначения 

/* 
Как правило , в имени используется определенные префиксы, обозначает действие, после которых следует 
обьет действия .
Например , функции, начинаются с 

"show..." - обычно что-то показывает ,
"get..." - возвращают значение , 
"clac..." - что-то вычисляют,
"create..." - что-то создает,  
"check..." - что-то проверяет и возвращают логическое значение , и т.д .


Примеры : 
showMessange - показывает сообщение 
getOptions - получить параметры 
clacSue - посчитать сумму 
и т.д 
*/ 




// home work 3 


// Удвоение числа:
// Напишите функцию, которая принимает число в качестве аргумента и возвращает его удвоенное значение 





function getDistance(number) {
    return number + number;
}

let result = getDistance(5);
console.log(result);


// Проверка на четность:
// Напишите функцию, которая принимает число и возвращает true, если оно четное, и false, если нечетное. 



function even (numb) {
    let number = numb ;
    if(number % 2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(even (5));
console.log(even (4));



// Поиск максимального числа:
// Напишите функцию, которая принимает массив чисел и возвращает максимальное значение 

let list = [25, 3, 656, -78, 89.7, 890, 2000, 70000]; 
function maxElement (list){
    let max;
    let min = list[0];
    for(let i = 0; i < list.length; i++){
        if((list[i]) < min){
            min = list[i]; 
        } else {
            max = list[i];
        }
    }
    return max;
}

console.log(maxElement(list)); 



// Проверка на палиндром:
// Напишите функцию, которая принимает строку и возвращает true,
//  если она является палиндромом (читается одинаково как слева направо, так и справа налево), и false в противном случае. 


function palindrome(str) {
    str = str.toLowerCase().replace(/ /g, '');
    
    return str === str.split('').reverse().join('');
}

let str = "А роза упала на лапу Азора"; 
let str2 = "боб" 
let str3 = "дерево"
let str4 = "заказ"

console.log(palindrome(str)); 
console.log(palindrome(str2)); 
console.log(palindrome(str3)); 
console.log(palindrome(str4)); 


// Расчет среднего значения:
// Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает среднее значение 


const arr = [1, 3, 5, 7, 9, 11];

const getAverage = (numbers) => {
  let sum = 0; 
  for (let i = 0; i < numbers.length; i += 1) { 
    sum += numbers[i]; 
  }
  return sum / numbers.length; 
};

console.log(getAverage(arr)); 

