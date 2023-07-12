function arraySort(arr)
{ 
    for (let i = 0; i < arr.length; i++) {
     for (let j = i+1;j < arr.length; j++) {
         if(arr[i] > arr[j])
         {
            let temp=0;
            temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
         }
     }    
    }
    return arr;
}

let result = arraySort([1,25,345,23,34,78,20]);
console.log("sorted array", result);
console.log('second highest number: ', result[result.length-2]);