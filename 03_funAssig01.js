// function with no arg & no return values
function myName()
{
     console.log("Suraj Bhosale");
}
function today()
{
    console.log(new Date());
}
// function with argument without return value
function personalDetails(fname,lname,cname)
{
 console.log(fname+" "+lname+" "+cname);

}
// swapping the values
function swap(var1,var2)
{
    var temp;
    temp=var2;
    var2=var1;
    var1=temp;
    console.log(var1+"\t"+var2);

}

// 
function addThreeValues(val1,val2,val3)
{
    return val1+val1+val3;
}


//  function calls
console.log("--------------------------------------------------");
myName();
console.log("--------------------------------------------------");
today();
console.log("--------------------------------------------------");
personalDetails("Suraj","Bhosale","Sangola College, Sangola");
console.log("--------------------------------------------------");
swap("virat","anushka");
swap(1000,2000);
console.log("--------------------------------------------------");
console.log(10.23,600,40);
console.log("Hello","Good", "Morning");