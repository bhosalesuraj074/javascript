function squareOfWordLength(str)
{
   var len = str.length; 
   console.log("Length of the String: "+len);
   return `square of string length: ${len*len} `;
}

console.log("-----------------------------------------------------");
console.log(squareOfWordLength("JavaScript"));
console.log("-----------------------------------------------------");
console.log(squareOfWordLength("Google Chrome"));
console.log("-----------------------------------------------------");
console.log(squareOfWordLength("Developer Smart"));
console.log("-----------------------------------------------------");

function stringDivide()
{
    var str = "I am Angular Developer";    
    console.log("Division Result: ", (str.length / str.split(" ").length));
    console.log("-----------------------------------------------------");
    console.log("Multiplication Result: ", (str.length * str.split(" ").length));
    console.log("-----------------------------------------------------");
}
stringDivide();