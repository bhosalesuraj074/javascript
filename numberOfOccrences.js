function countOccurrences(str){
    str = str.toLowerCase();
    let counter=0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if(str[i] == str[j])
            {
                counter++;
            }
        }
        console.log(str[i], ' ', counter+1)
        counter=0;
    }
}

countOccurrences('Suraj Bhosale');

let obj={
    s:function(){
        
        console.log('Hello');
    }
}

console.log();