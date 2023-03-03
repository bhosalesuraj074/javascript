function factorialOfWordCount(str)
{
    
    if(str == null || isNaN(str) || typeof str !== typeof "string")
    {
        return `You have entered ${str}. please enter the valid input`;
    }
    var num = str.length;
    for (let index = 1; index <= num; index++) 
    {
        result = result * index;
    }
    return `The factorial of ${str} is '${result}'`;
}
 console.log(factorialOfWordCount(null))
 console.log(factorialOfWordCount(NaN))
 console.log(factorialOfWordCount("Revision is the mother of success"));