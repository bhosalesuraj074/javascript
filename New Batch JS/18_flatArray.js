let arr= [2,3,4,[50,4]];
console.log(arr);
const newArray = arr.flat();
console.log(newArray);

const aa= [2,3,4,[50,4], [4,5,[9,4]]];
const bb = aa.flat();
console.log(bb);
console.log('------- with custom logic that depth =2 -----');
const cc= aa.flat(2);
console.log(cc);