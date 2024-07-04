function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

console.log(calculator(4, 5, multiply));
console.log(calculator(4, 5, add));



// function calc(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case "po":
//             result = num1 * num2;
//         break;
//         case "plus":
//             result = num1 + num2;
//         break;
//         case "delete":
//             result = num1 / num2;
//         break;
//         case "minus":
//             result = num1 - num2;
//         break;
//     }
//     return result;
// }
// console.log(calc(660, 2, "delete"));