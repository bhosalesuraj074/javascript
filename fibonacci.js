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
