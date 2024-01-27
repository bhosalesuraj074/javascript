const arrayRollNumbers = [113, 45,56,11,32,45,109,799, 56, 45];
console.log('Array elements', arrayRollNumbers);
console.log('Reverse the array', arrayRollNumbers.reverse());
console.log('sorting the element ', arrayRollNumbers.sort());
console.log('sorting element by custom logic', arrayRollNumbers.sort((a, b)=> a > b ? 1 : -1));
console.log('Greatest number :', arrayRollNumbers[arrayRollNumbers.length-1]);
console.log('Smallest number :', arrayRollNumbers[0]);
let newArray = new Set(arrayRollNumbers);
console.log('After Removing the duplicate element from the array :', [...newArray]);