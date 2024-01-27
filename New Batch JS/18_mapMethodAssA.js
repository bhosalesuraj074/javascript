const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
let result1 = arrayNumbers.map(element => element +10);
console.log(result1);
let result2 = arrayNumbers.map(element => element * element * element);
console.log(result2);
let result3= arrayNumbers.map( (currentValue, index)=>{
 
 return currentValue + index;
})
console.log(result3);