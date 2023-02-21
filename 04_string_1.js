var str="Hello World";
console.log("Size of the string : "+ str.length);
console.log("Char At 4 index: ",str.charAt(4));
console.log("Last index: "+ str.charAt(str.length-1));
console.log("index number of charter 'W': "+str.indexOf("W"));
//case sensitive
console.log("index number of charter 'w' which is not present: "+str.indexOf("w"));
console.log("index number of character 'o' from last: "+ str.lastIndexOf("o"));
var replace= str.replace("World","Morning");
console.log("Replaced String: "+replace);
console.log("String in upper case: "+ str.toUpperCase());
console.log("String in Lower case: "+ str.toLowerCase());

// Trim the string
var nam=" Rohit  Sharma ";
var demo = nam.trim()
console.log("After the trim the string: "+ demo+" "+ nam.length," "+demo.length);
console.log("Extra spaces: "+ (nam.length - demo.length));
console.log("Remove spaces from starting: "+nam.trimStart());
console.log("Remove spaces from End: "+nam.trimEnd());
console.log("Substring of str: "+ str.includes("rld"));

// slice method using
console.log("slice method: "+str.slice(1,5));
//split method
var splitVar= str.split(" ");
console.log("Split the string: "+splitVar);
console.log("Number of words:" +splitVar.length);
var myFriendList = "Bill gates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
console.log("Total number friends: "+ myFriendList.split(" ").length);