function add(number1, number2) 
{
    return number1 + number2;
}

function addNumbers() 
{
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = add(addend1, addend2);
    document.querySelector('#sum').value = result;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
const subtract = function (number1, number2) 
{
    return number1 - number2;
}
const subtractNumbers = function() 
{
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let result = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = result;
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => 
{
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
function divide(number1, number2) 
{
    return number1 / number2;
}
function divideNumbers() 
{
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);





const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
document.querySelector('#array').textContent = numbers;
document.querySelector('#odds').textContent = numbers.filter(number => number % 2);
document.querySelector('#evens').textContent = numbers.filter(number => number % 2 === 0);
document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number, 0);
document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);
document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);
