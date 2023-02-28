var monthOf = function (month)
{
switch (month) {
    case 1:
        console.log(`You have entered ${month}  : January` );
        break;
    case 2:
        console.log(`You have entered ${month}  : February` );
        break;
    case 3:
        console.log(`You have entered ${month}  : March` );
        break;
    case 4:
        console.log(`You have entered ${month}  : April` );
        break;
    case 5:
            console.log(`You have entered ${month}  : May` );
            break;
        case 6:
        console.log(`You have entered ${month}  : June` );
        break;
    case 7:
        console.log(`You have entered ${month}  : July` );
        break;
    case 8:
        console.log(`You have entered ${month}  : August` );
        break;
    case 9:
        console.log(`You have entered ${month}  : September` );
        break;
    case 10:
        console.log(`You have entered ${month}  : October` );
        break;
    case 11:
        console.log(`You have entered ${month}  : November` );
        break;
    case 12:
        console.log(`You have entered ${month}  : December` );
      break;
      
    default:
        console.error(`You entered '${month}' invalid month, please enter provide valid month`);

}
}
console.log("------------------------------------------------------------------");
console.log("Task 1: Find the month by entering the number of the month");
console.log("-------------------------------------------------------------------");
monthOf(2);
monthOf(5);
monthOf(12);
monthOf(15);
monthOf(100);
console.log("================================================================");


console.log("Task 2: Check entered year is leaf or not");
console.log("----------------------------------------------------------------");



var checkLeapYear = (year) => {
    if( year == null || year == undefined || isNaN(year) || typeof year == String ){
        console.error(` You entered '${year}'. Please enter the valid year`);
        return 0;
    }
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 ==0))
    {
        console.log(`'${year}' is leap year`);
    }
    else
    {
        console.log(` ${year} is not leap year`);
    }

} 
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);