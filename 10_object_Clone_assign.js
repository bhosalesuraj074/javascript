var counter=0;
function print()
{
    console.error(`---------------------------------------------------Task: ${++counter}--------------------------------------------------------`);
}

let arrayNums = [20,3,4,56,90,400,49];
console.log("The Given Array: " , arrayNums);
print();
let cloneArray = arrayNums;
cloneArray.push(55);
cloneArray.push(66);
console.log("Performing the shallow cloning");
console.log("Original Array: " , arrayNums);
console.log("Cloned Array  : ",cloneArray);
print();
console.log("Performing Deep cloning using the spread operator");
let arrayClone= [...arrayNums];
arrayNums.push(10);
arrayNums.push(25);
console.log("Original Array: ",arrayNums);
console.log("Cloned Array: ", arrayClone);
print();
console.log("Concat the two array using the spread operator");
let evenArray=[2,30,14,8];
arrayNums =[...arrayNums,...evenArray];
console.log(`After merge array operation using spread operator [... ]: `,arrayNums );
print();
 
const employee_info ={
  emp_id:27,
  emp_name: "Suraj Bhosale",
  salary: {
     july_month:"40,0000INR",
     aug_month :"50,0000INR",
     jun_month :"65,0000INR"
  },
  address :{
     locality : {
        colony : "OM Varindavan Society",
        street : "Kanch Pokli, 431202", 
     },
     city: "Mumbai",
     state:"Maharashtra",
     country: "India"
  },
  mobiles: ["+91 8600 2344 22","1234- 2344 52","+91- 9096 5678 77"]
}
console.log("Employee Details:-  ");
console.log("printing address of the employee: ", employee_info.address);
console.log("printing Mobile numbers of the employee: ", employee_info.mobiles);

print();
console.log("Performing the deep cloning the using JSON.stringfy():- ");
const emp_clone =JSON.parse(JSON.stringify(employee_info));
emp_clone.salary.july_month="80k";
console.log("Original object salary of month of july_month", employee_info.salary.july_month);
console.log("Clone object salary of month of july_month", emp_clone.salary.july_month);
print();
employee_info.address.country="United Kingdom";
console.log("Original object country", employee_info.address.country);
console.log("Cloned object country", emp_clone.address.country);
