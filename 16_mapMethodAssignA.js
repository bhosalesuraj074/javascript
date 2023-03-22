function print() {
    console.error("----------------------------------------------------------------------------");
};
let arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("The given array is: ", arrayNumbers);
print();
console.log("Adding '10' in element of the array");
let arr=arrayNumbers.map(element => element+10)
console.log(arr);
print();
console.log("square of the each element of the array");
arr=arrayNumbers.map(element => element ** 2)
console.log(arr);
print();
console.log("Adding the index value with element of the array");
arr= arrayNumbers.map((element,index) => element+index);
console.log(arr);
print();

