function MarriageEligibility(gender, age, name)
{ 
    console.log("----------------------------------------------------------");
    return  gender =="male" ?(age >= 21 ? `'${name}' you are eligible for marriage` : `'${name}' you are not eligible for marriage`):
     (age >= 18 ? `'${name}' you are eligible for marriage` : `'${name}' you are not eligible for marriage`) ; 
}
console.log(MarriageEligibility("male", 25, "Bill Gates"));
console.log(MarriageEligibility("male", 17, "stew jobs"));
console.log(MarriageEligibility("female", 16, "jenifer"));
console.log(MarriageEligibility("female", 27, "Malinda Gates"));