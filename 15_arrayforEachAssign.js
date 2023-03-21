function print()
{
    console.error("---------------------------------------------------------------");
}
let arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

print();
console.log("Task: Printing array element with it's index");
arrayNumbers.forEach((element,index)=>{
   console.log(`Index: ${index} & Element: ${element}`)
});
print();
let arrayPositive =[]
console.log("Task: finding the positive element from the array: ");
arrayNumbers.forEach((element)=>{
    if(element > 0)
      arrayPositive.push(element)    
 });
 console.log("Positive element from the array: "+arrayPositive);
 print();
 let negativeArray =[];
 arrayNumbers.forEach((element)=>{
    if(element < 0)
      negativeArray.push(element)    
 });
 console.log("Negative element from the array: ",negativeArray);
 print();
 console.log("Task: Finding the even numbers form the array");
 let evenArray=[];
 arrayNumbers.forEach((element)=>{
    if(element % 2 == 0)
      evenArray.push(element);
 });
 console.log("Even element: "+ evenArray);
 print();
 console.log("Task: finding array elements sum");
 let sum=0
 arrayNumbers.forEach((element)=>{
    
      sum += element;
 });
 console.log("Sum of the array elements: ", sum);
 print();
 console.log("Task: Printing element on the console whose index is even");
 let evenIndex=[];
 arrayNumbers.forEach((element,index)=>{
    if(index %2 == 0) 
     evenIndex.push(element);
});
console.log("Even index elements: "+evenIndex);
print();