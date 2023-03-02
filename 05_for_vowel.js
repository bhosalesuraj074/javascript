var countVowel= function (str)
{
  var vowel=0;
  var v= str.toLowerCase();
  for (let index = 0; index < str.length-1; index++) {
    if(v[index] == 'a' || v[index] == 'e' || v[index] == 'o'
        ||v[index] == 'u' ||v[index] == 'i')
        {
            ++vowel;
        }

         
  }
  return `The string '${str}' contains ${vowel} vowels.`;

}

console.log("Task 1: Finding the vowel in the given string");
console.log("----------------------------------------------------------------------------------------------------");
console.log(countVowel("JavaScript is a language of the internet"));
console.log(countVowel("I am Angular Developer"));
console.log(countVowel("Hard word and commitment is the key of success"));



console.log("===================================================================================================");
console.log("Task 2: Finding the length of last word of the string");
console.log("---------------------------------------------------------------------------------------------------");
var lastWordCharsCount  = (str) =>
{
    var counter=0;
    for (let index = str.length-1 ; index > 0; index--) {
        if(str[index] == ' ')
        {
            break;
        }
        else{
            ++counter;
        }
    }
    return `You enter string is '${str}' & last word count is '${counter}'`;
    
}

console.log(lastWordCharsCount("Never give up"));
console.log(lastWordCharsCount("Hard word and commitment is the key of success"));
console.log(lastWordCharsCount("I am Angular Developer"));
console.log("---------------------------------------------------------------------------------------------------")