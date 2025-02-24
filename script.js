console.log(`ba${2/undefined}a`);

function numToBinary(number){
    let result = '';
    while(number>0){
        result+=number%2;
        number = Math.floor(number/2)
    }
    return result.split('').reverse().join('');
}

// function numToBinary(number){
//     return number.toString(2);
// }


const num = +prompt("Please enter a number:");

console.log(numToBinary(num));