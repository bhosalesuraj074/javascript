// Task 1: finding the greatest number from the two numbers
function greaterNum(x,y)
{  
    console.log("---------------------------------------");
    return  x > y ? x :y;
}
console.log("Greater Number is: "+greaterNum(-10,10));
console.log("Greater Number is: "+greaterNum(800,899));

// Task 2: check the number is even or odd
function evenOrOddNum(n)
{
    console.log("---------------------------------------");
    return n % 2 == 0 ? true : false;   
} 

console.log("The evenOrOddNum(29) returns: "+evenOrOddNum(29));
console.log("The evenOrOddNum(44) returns: "+evenOrOddNum(44));
console.log("The evenOrOddNum(0) returns: "+evenOrOddNum(0));
console.log("The evenOrOddNum(101) returns: "+evenOrOddNum(101));

// Task 3:  Check the given String having string length even or odd
function wordLength(str)
{
    console.log("---------------------------------------");
    return str.length % 2 == 0 ? `${str} has 'EVEN' length ` : `${str} has 'ODD' length `;   
}

console.log(wordLength("Google"));
console.log(wordLength("JavaScript"));
console.log(wordLength("Developer"));