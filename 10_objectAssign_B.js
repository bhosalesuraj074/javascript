var counter=0;
function print()
{
    console.error(`---------------------------------------------${++counter}-----------------------------------------------`);
}
bankSbi ={
  bankName :"SBI Bank",
  accountNumber : 3856782389,
  ifscCode : "SBI34534662",
  brachCode : "SBI2436343"
};
bankLocation ={
    street : "Shivaji Nagar",
    city : "Pune",
    pin : 412322
};
print();
newObj1 = Object.assign({},bankSbi, bankLocation);
console.log("1. Cloning the object using Object.assign(): ",newObj1);
print();
console.log("");
let newObj2 ={...bankSbi,...bankLocation}; 

console.log("2. Cloning the object using Deep Cloning ie Spread Operator:",newObj2);
let rateOfInterest = 
{
  homeLoan : '7%',
  personalLone: '8%',
  dueInterest: '10%'
}
print();
const sbiDetails = {...bankSbi, ...bankLocation, ...rateOfInterest};

console.log("Traversing within the object: ");
for (const key in sbiDetails) {
   
        console.log(`${key}: ${sbiDetails[key]}`)
    }
    console.error(`---------------------------------------------${++counter}------------------------------------------------`);