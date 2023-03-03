function factorial(num)
{
 var result=1;
 if(typeof num != "number" || num == 0 || isNaN(num))
  {
    return `You have entered ${num}. please enter the valid input`;
  }
  for (let index = 1; index <= num; index++) 
  {
     result = result * index;
  }    
  return `The factorial of ${num} is '${result}'`;
}
console.log("Task 1. Find the factorial of the given number");
console.log("----------------------------------------------------");
console.log(factorial(5));
console.log(factorial(3));
console.error(factorial(null));
console.log(factorial(8));
console.error(factorial(undefined));
console.log(factorial(9));
console.error(factorial(0));
console.error(factorial(NaN))
console.log("----------------------------------------------------");
