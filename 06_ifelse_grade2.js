function eligibilityCheck(graduation, hsc,ssc,name)
{
  console.log("-----------------------------------------------------");
  if (graduation >= 70 || hsc >=80 || ssc > 90) 
  { 
    return `Congrats '${name}' you are eligible for TCS interview`;
  }
  else
  {
   return `Dear '${name}' Unfortunately you not not meet TCS eligibility criteria.`;
  }
}
console.log(eligibilityCheck(80,86,90,"Suraj"));
console.log(eligibilityCheck(70,65,55,"Akash"));
console.error(eligibilityCheck(60,79,78,"Sagar"));
console.log("-----------------------------------------------------");