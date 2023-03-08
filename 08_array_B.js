var counter=0;
var even=[];
var odd=[];

function print()
{
    console.error(`-----------------------------------${" Task "+ ++counter} -------------------------------------------`)
}
function findEven(array)
{
    
    for (let index = 0; index < array.length; index++) {
        
        if(array[index] % 2 == 0)
        {
            even.push(array[index]);
        }
       
    }
    return even;
}

function findOdd(array)
{
    
    for (let index = 0; index < array.length; index++) {
        
        if(array[index] % 2 !== 0)
        {
            odd.push(array[index]);
        }
       
    }
    return odd;      
}
// finding the sum of the array
var findSum =function(array)
{   let  sum=0;
    for (let index = 0; index < array.length; index++) {
       sum = sum + array[index];   
    }
    return sum;
}

function findElement(array,num)
{  
    for (let index = 0; index < array.length; index++) {
        if(array[index] === num)
        {
           return `'${num}' is present in the array`;
        }     
    }
    return `'${num}' is not present in the array`;
}


const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log("The Given array: ", arrayNumbers);
print();
console.log("Length of the array is: "+ arrayNumbers.length);
print();
console.log("First element of the given array is: "+ arrayNumbers[0]);
console.log("Last element  of the given array is: "+ arrayNumbers[arrayNumbers.length-1]);
print();
console.log("Third Last element of the array: ", arrayNumbers[arrayNumbers.length-3]);
print();
console.log("Even element in the array: ", findEven(arrayNumbers));
print();
console.log("Odd element in the array: ", findOdd(arrayNumbers));
print();
console.log("Even position element of the array: ",(function(array){
    let evenIndex=[];
    for (let index = 0; index < array.length; index++) {
         if(index % 2 == 0)
         {
            evenIndex.push(array[index]);
         }}
    return evenIndex;
}(arrayNumbers)) 
)
print();
console.log("Odd position element of the array: ",(function(array){
    let oddIndex=[];
    for (let index = 0; index < array.length; index++) {
         if(index % 2 != 0)
         {
            oddIndex.push(array[index]);
         }}
    return oddIndex;
}(arrayNumbers)) 
)
print();
console.log("Addition of the array elements: ", findSum(arrayNumbers));
print();
console.log("Elements from the which is multiple of 5 is: " , function(array){
    let multiOf5=[];
    for (let index = 0; index < array.length; index++) {
       if (array[index] % 5 == 0)
       {
         multiOf5.push(array[index]);
       }
        
    }
    return multiOf5;
}
(arrayNumbers))
print();
console.log("Is '115' present in the array: ",findElement(arrayNumbers,115));
print();
console.log("Is '23' present in the array: ",findElement(arrayNumbers,23));
print();
arrayNumbers.splice(3,0,55,66);
console.log("After inserting the elements in the array: ", arrayNumbers);
print();
arrayNumbers.splice(4,3);
console.log("After deleting the element 3 element from index 4: ", arrayNumbers);
console.error(`---------------------------------------------------------------------------------------`)
