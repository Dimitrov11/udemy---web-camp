/** WHILE LOOP */

// let result = [];
// let count = 1;

// function fizzBuzz(num) {
//     while (count <= num) {

//         if (count % 3 == 0 && count % 5 == 0) {
//             result.push('FizzBuzz');
//         }  else if (count % 3 == 0) {
//             result.push('Fizz');
//         }  else if (count % 5 == 0) {
//             result.push('Buzz');
//         } else {
//             result.push(count);
//         }
//         count ++;
//     }
    
//     console.log(result);
// }
// fizzBuzz(20);



/** FOR LOOP */

let result = [];

function fizzBuzz(num) {
    for (let count = 1; count < num; count++) {
        if (count % 3 == 0 && count % 5 == 0) {
            result.push('FizzBuzz');
        }  else if (count % 3 == 0) {
            result.push('Fizz');
        }  else if (count % 5 == 0) {
            result.push('Buzz');
        } else {
            result.push(count);
        }
    }
    
    console.log(result);
}
fizzBuzz(20);
