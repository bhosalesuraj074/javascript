function factorialOfWordCount(word)
{
     var result =1 ;
       //var len = word.length;
    if(word == null || word == undefined || typeof word == typeof isNaN(word))
    {
        return `You have entered '${word}'. please enter the valid input`;
    }
    let num = word.split(" ").length;
    if(word.length > 0)
    {
    for (let index = 1; index <= num; index++) 
    {
        result = result * index;
    }
    return `string: '${word}', length of the string is '${num}' and factorial of the string is '${result}'`;
    }
    else{
        return `string: "${word}", Length of the string <= 0`;
    }
}
console.log("Task 2. Finding factorial of the string length");
console.log("-----------------------------------------------------------------------------------------------------------------------------");
console.log(factorialOfWordCount("Revision is the mother of success"));
console.log("-----------------------------------------------------------------------------------------------------------------------------");
console.log(factorialOfWordCount("we never fail, we alway learn"));
console.log("-----------------------------------------------------------------------------------------------------------------------------");
console.error(factorialOfWordCount(null));
console.log("-----------------------------------------------------------------------------------------------------------------------------");
console.error(factorialOfWordCount(""));
console.log("-----------------------------------------------------------------------------------------------------------------------------");
console.log(factorialOfWordCount("Suraj Jalindar Bhosale"));
console.log("-----------------------------------------------------------------------------------------------------------------------------");
