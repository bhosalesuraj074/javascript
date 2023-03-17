let a =1,temp=0;
let prev =0;
let arr=[];
arr.push(prev,a);

while(a<20)
{ 
 temp = a + prev;
 prev = a;
 a = temp;
 arr.push(temp);
}
console.log(""+arr);




console.log("----------------------------------------------------------------------------------------");
let array =[];
array.push(0);
array.push(1);
for (let index = 0; index < 10; index++) {
    array.push(array[array.length-2] + array[array.length-1])
}
console.log(array);