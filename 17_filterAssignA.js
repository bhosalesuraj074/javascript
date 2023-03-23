function print()
{
    console.error("----------------------------------------------------------------------------------");
}
const array =[20,11,40,25,37,49,9,90,60,2,19];
console.log("The Given array" ,  array);
print();
console.log("Task: Printing all the 50 < element ");
let greater50 =array.filter( element => element > 50);
console.log(greater50);
print();
console.log("Task: finding all the even elements from the array");
let evenArray =array.filter( element => element % 2 == 0);
console.log(evenArray);
print();
console.log("Task: finding all the odd elements from the array");
let oddArray =array.filter( element => element % 2 != 0);
console.log(oddArray);
console.log("Task: finding all the elements from the array which multiple of the 5");
let Array5 =array.filter( element => element % 5 == 0);
console.log(Array5);
print();
console.log("Task: finding all the elements between 20 to 50");
let Array2050 =array.filter( element => element > 20  && element < 50);
console.log(Array2050);
print();
