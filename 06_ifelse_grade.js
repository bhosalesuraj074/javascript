function voteEligibility(age)
{
  if(age <= 0 || age == undefined || age == null || typeof age != "number" || age >120 || isNaN(age))
  {
    return `You have entered --> ${age}. Please enter the valid data`;
  }  
  if(age >= 18)
  {
     return `The person age is ${age} he/she is 'Eligible' for the voting`;
  } 
  else
  {
    return `The person age is ${age} he/she is 'Not Eligible' for the voting`;
  }  
}
console.log("---------------------------------------------------------------");
console.log("Task 1: Age to check whether he or she is eligible for voting or not ");
console.log("---------------------------------------------------------------");
console.log(voteEligibility(45));
console.log(voteEligibility(17));
console.log(voteEligibility(8));
console.log(voteEligibility(20));
console.error(voteEligibility(-10));
console.error(voteEligibility(200));
console.error(voteEligibility(0));
console.error(voteEligibility(undefined));
console.error(voteEligibility(null));
console.error(voteEligibility("Suraj"));


console.log("=================================================================");
console.log("Task 2: Checking the grade");
console.log("---------------------------------------------------------------");

function gradeCalculation(marks){
  // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
  // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
  if(marks<=0 || marks > 100 || (typeof marks!= "number") || isNaN(marks)){
      return console.error(`You have entered ${marks}. Please provide the valid marks`);
  }

  if(marks >= 90) {
    return console.log(`funtastic marks ${marks}, your grade is A+`);
  }

  else if(marks >= 75 && marks < 90) {
    return console.log(`Excellent marks ${marks}, your grade is A`);
  }

  else if(marks >= 50 && marks < 75) {
    return console.log(`Good  marks ${marks}, your grade is B`);
  }
  
  else if(marks >= 35 && marks < 50) {
    return console.log(`Your marks is ${marks}, your grade is c. Need to improvement`);
  }
  else{
    return console.log(`You failed. your marks is ${marks}`);
  }
  }
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation("91");
  gradeCalculation("Seventy One");
  gradeCalculation(NaN);// 
  gradeCalculation(undefined);//
  gradeCalculation(null);//
  console.log("------------------------------------------------------------");

