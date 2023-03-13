var counter=0;
function print(){
  console.error(`-------------------------------------------${++counter}----------------------------------------------`);
}
class Vehicle
{
    carCompany
    carModel
    prize
    color
    setting_capacity
    constructor(carCompany,carModel, prize,color,setting_capacity)
     {
        this.carCompany= carCompany;
        this.carModel= carModel;
        this.prize= prize;
        this.color= color;
        this.seating_capacity=setting_capacity
     }
}
let harrier = new Vehicle("TATA" ,"Harrier","20 lacks","black",5)
let fortuner = new Vehicle("Toyota","Fortuner legender","50 Lacks","white",7);
let endeavors = new Vehicle("Ford","endeavors","35 Lacks","Black",7);
let Mercedes = new Vehicle("Mercedes","Benz G-Class","1.7 cr","Red",6);
let Mahindra  =new Vehicle("Mahindra","Thar","11 lacks","Black",4);
let carArray = [harrier,fortuner,endeavors,Mercedes,Mahindra];
console.log("Task 1: car and there attributes")
for (const carDetails of carArray)
 {
    print();
    
    console.log(`Details of the '${carDetails.carCompany}' car:  Model : '${carDetails.carModel}', Prize : '${carDetails.prize}', Color : '${carDetails.color}' , & Seating Capacity: ${carDetails.seating_capacity}`);
    
 }
 console.error("-------------------------------------------------------------------------------------------");
//==================================================================================================================


class College
{
    university
    college_name
    location
    streams=[]
    constructor(university,college_name,location,streams)
    {
        this.university = university;
        this.college_name = college_name;
        this.location = location;
        this.streams = streams;
    }

}
function traverseObject(college)
{
  console.log(`'${college.college_name}' college Details: `)  
  for (const [key,value]  of Object.entries(college)) {
     console.log("     ",key,":  ",value)
  }
}
console.log("Task 2. College Details: ")
var counter=0;
print();
const sangola =new College("Solapur University","Sangola College", "Sangola",["Computer Science","Mathematics","Chemistry"]);
traverseObject(sangola);
print();
const mit =new College("SPPU","MIT ACSC","Pune",["Civil","Electrical","CSC"]);
traverseObject(mit);
console.error("-------------------------------------------------------------------------------------------");


function isPrime(num)
{
    let  flag =false;
    for (let index = 2; index < num; index++) {
        if(num % index === 0)
        {
            flag =true;
            break;
        }
        
    }
    if(flag)
    {
        return `${num} is not prime`;
    }
    else{
        return `${num} is prime`;
    }
}
console.log("Task 3:Checking the number is prime or not");
console.log(isPrime(17));
console.log(isPrime(10));
console.error("-------------------------------------------------------------------------------------------");