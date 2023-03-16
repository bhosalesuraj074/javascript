let arr=[];

for (let index = 2; index <= 20; index++) {
     let flag =false;    
     for (let i= 2 ; i < index; i++)
     {
         if(index % i === 0)
        {
            flag =true;
            break;
        }   
    }
    if(flag)
    {

    }
    else{
        arr.push(index)
    }
    
}
console.log(""+arr);