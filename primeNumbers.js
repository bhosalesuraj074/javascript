let arr=[];
function primeNumbers(a,num){
    let counter =1;
    for (let index = a; ; index++) {
       let flag =false;    
       for (let i= 2 ; i < index; i++)
        {
            if(index % i === 0)
            {
              flag =true;
              break;
            }   
        }
    if(flag){

    }
    else{
            if(counter <= num){ 
            ++counter; 
            arr.push(index);
            }
            else{
            break;
            }
        }
}
console.log(arr);
}
primeNumbers(2,30);