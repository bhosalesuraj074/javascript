var counter=0;
function print()
{
    console.error(`---------------------------------------${++counter}-------------------------------------------`);
}

let arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water melon"];
console.log(arraySeasonalFruits)
print();
console.log(`first element arraySeasonalFruits array is: '${arraySeasonalFruits[0]}'`);
console.log(`Last element arraySeasonalFruits array is: '${arraySeasonalFruits[arraySeasonalFruits.length-1]}'`);
print();
arraySeasonalFruits.unshift("Papaya");
console.log("After adding the 'Papaya' element starting of array:  "+arraySeasonalFruits);
print();
arraySeasonalFruits.splice(4,1);
console.log("After removing the 'Mango' element from array:  "+arraySeasonalFruits);
print();
arraySeasonalFruits.push("Pineapple");
console.log("After adding the 'Pineapple' element end of array:  "+arraySeasonalFruits);
print();
arraySeasonalFruits.splice(4,0,"Dragon fruit");
console.log("After adding the 'Dragon fruit' element before the 'water melon':  "+arraySeasonalFruits);
print();
arraySeasonalFruits.splice(2,1,"Kiwi");
console.log("Adding the element 'Kiwi' by replacing element 'Orange' in array:  "+arraySeasonalFruits);
print();
console.log("Printing the element from index 1 to 4: "+arraySeasonalFruits.slice(1,5));
print();
console.log("Last 3 element from the array: "+ arraySeasonalFruits.slice(arraySeasonalFruits.length-3));