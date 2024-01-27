function print()
{
    console.error(`------------------------------------------`);
}
print();
const arrayNumber = [1, -7, 40, 502, -77, 91, 0 , 108, 89, -601];
arrayNumber.forEach(element => {
    console.log(element);
});
print();
console.log('***** 2.  Positive element  *****');
arrayNumber.forEach(ele=>{
    if(ele > 0 )
    {
        console.log(ele);
    }
})
print();
console.log('***** 3.  Negative element  *****');
arrayNumber.forEach(ele=>{
    if(ele < 0 )
    {
        console.log(ele);
    }
})

print();
console.log('***** 4.  Even element  *****');
arrayNumber.forEach(ele=>{
 if(ele%2 ==0){
    console.log(ele);
 }
})

print();
console.log('***** 5.  sum of all element  *****');
let sum =0;
 arrayNumber.forEach(ele=> sum += ele);
console.log(sum);
print();
console.log('***** 5. even index element  *****');
arrayNumber.forEach((res, index ,arr)=>{ 
  if(index % 2==0 )
  {
    console.log(res);
  }
})