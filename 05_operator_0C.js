function eligibilityCheck(graduation, hsc,ssc,name)
{
  console.log("-----------------------------------------------------");
  return graduation >= 70 || hsc >=80 || ssc > 90 ? (`Congrats '${name}' you are eligible for TCS interview`) :
  (`Dear '${name}' Unfortunately you not not meet TCS eligibility criteria.`)
}
console.log(eligibilityCheck(80,86,90,"Suraj"));
console.log(eligibilityCheck(70,65,55,"Akash"));
console.log(eligibilityCheck(60,79,78,"Sagar"));
console.log("-----------------------------------------------------");