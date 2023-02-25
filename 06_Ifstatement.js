function evenOdd(num)
{
   
    if(num % 2==0)
    {
        return `${num} is 'Even'`;
    }
    return `${num} is 'Odd'`;
}
function isValid(age)
{
    
    if(age >= 18)
    {
        return `The person having age ${age} is 'eligible' for voting`;
    }
  return `The person having age '${age}' is 'not eligible' for voting`;
}



console.log("--------------------------------------------------------");
console.log(evenOdd(45));
console.log(evenOdd(70));
console.log(evenOdd(67));
console.log(evenOdd(90));
console.log("========================================================");

console.log(isValid(18));
console.log(isValid(20));
console.log(isValid(17));
console.log(isValid(40));
console.log("========================================================");

// check the string contains more than 10 character
console.log(function(str)
{
    if(str.length > 10)
    {
        return `'${str}' contains more than 10 characters `;
    }
    return `'${str}' contains less than 10 characters `
}("JavaScript-ES6"));

console.log("========================================================");
console.log(function(str1)
{
    var str2="javaScript is best language for web development";
    if(str2.startsWith(str1))
    {
       
        return `Given string start with '${str1}'`;
    }
    return `Given string does not start with '${str1}'`;
}("java"));
console.log("--------------------------------------------------------");