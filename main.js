let num = 266219;
let numArr = num.toString().split("");

let result = 1;
for (let i = 0; i < numArr.length; i++) {
  result *= numArr[i];
}

result **=3

console.log(result.toString().substring(0,2));