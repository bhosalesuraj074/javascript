var counter=0;
function print() {
    console.error(`------------------------------------------------------------Task ${++counter}------------------------------------------------------------`);
}

professor ={
   pid:101,
   name:"Gajanan Kharat",
   department : "CSC",
   address : "Pune",
   pinCode : 413306 , 
   degrees :{
         engineering : 'CSC',
         PHD: 'Advance Computing',
         BSc : 'Computer Science'
   },
   certificates : ['HackerRank Participation','Certificate in Advance Java SpringBoot & RestAPI','Web Development'],
   totalDegrees : function()
   {
     return `Teachers total degree are : `,professor.degrees; 
     
   }  

}
 print();
 console.log("Object Properties"); 
 console.log(professor);
 print();
 console.log("Degree of the professor"+ professor.degrees);
 print();
 console.log(" Certificate of  Professor: ", professor.certificates);
 print();
console.log("Here calling function professor.totalDegrees(): ", professor.totalDegrees());
print();
professor.totalExperience =14;
console.log("After adding totalExperience & Accessing the property via 'professor.totalExperience': "+professor.totalExperience);
print();
console.log("Before updating the Address: ", professor.address);
professor.address="Wakad, Pune"
console.log("After  updating the Address: ", professor.address);
print();
console.log("Before adding certificate", professor.certificates);
professor.certificates.push("Oracle Certified");
console.log("After  adding certificate", professor.certificates);
print();
console.log("Last element of the certificate array: " ,professor.certificates[professor.certificates.length-1]);
console.error(`--------------------------------------------------------------------------------------------------------------------------------`);