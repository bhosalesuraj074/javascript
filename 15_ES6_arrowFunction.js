console.error("--------------------------------------------------------------------");
(()=>
{
  console.log("Good Morning, Today is Monday");   
})();
console.error("--------------------------------------------------------------------");
multiplication = (a,b,c=1)=>
{
      console.log("Multiplication:", (a*b*c))
}
multiplication(5,5,2);
multiplication(10,4);
console.error("--------------------------------------------------------------------");

addition = (val1, val2, val3, val4, val5)=>
{
     return "The given addition is: "+(val1+val2+val3+val4+val5);
}

console.log(addition(100,100,200,349,756));
console.log(addition("I am", " learning"," ES6"," features"+" in depth"));
console.error("--------------------------------------------------------------------");