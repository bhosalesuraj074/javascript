function print() {
    console.error("---------------------------------------------------------------------------------");
}
print();
let arrRollNumbers =[113,45,56,11,32,45,109,799,56,45];
console.log("The given array: ",arrRollNumbers);
print();
arrRollNumbers.reverse();
console.log("Task: Reverse the array: ", arrRollNumbers);
print();
arrRollNumbers.sort();
console.log("Task: sorting array without custom logic: ",arrRollNumbers);
print();
arrRollNumbers.sort((a,b)=> a>b? 1 : -1);
console.log("Task: sorting array with custom logic: ",arrRollNumbers);
print();
console.log("Task: Greatest number from the array: ",arrRollNumbers[arrRollNumbers.length-1]);
print();
console.log("Task: Smallest number from the array: ",arrRollNumbers[0]);
print();
let uniqueArr = arrRollNumbers.filter((element, index, array) => {
    return array.indexOf(element) === index;
  });
console.log("Task: Removing the dulpicate elements from the array: ",uniqueArr);
print();