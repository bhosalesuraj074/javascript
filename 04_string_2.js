function stringHandsOn() {
  var string = "     Hey you are doing good, keep it up       ";
  console.log(
    "------------------------------------1-----------------------------------------"
  );
  //1. Print the string on console.
  console.log("The Given String: " + string);
  console.log(
    "-------------------------------------2----------------------------------------"
  );
  //2. calculate the length of the string
  console.log("Calculate the length of the string: " + string.length);
  console.log(
    "--------------------------------------3---------------------------------------"
  );
  //3. Removing the leading and trailing extra spaces form the string
  var str = string.trim();
  console.log("After the removing the extra spaces from string: " + str);
  console.log(
    "After the removing the extra spaces the length of the string: " +
      str.length
  );
  console.log(
    "---------------------------------------4--------------------------------------"
  );
  //4. Printing the removed extra spaces from the string.
  console.log(
    "Printing removed count of the spaces: " + (string.length - str.length)
  );
  console.log(
    "----------------------------------------5-------------------------------------"
  );
  //5. Printing the first and the last charter from the string
  console.log("Printing First charter of the string: " + str.charAt(0));
  console.log(
    "Printing Last charter of the string: " + str.charAt(str.length - 1)
  );
  console.log(
    "-----------------------------------------6------------------------------------"
  );
  //6. printing the total number of the words
  console.log("Total number of word is: " + str.split(" ").length);
  console.log(
    "------------------------------------------7-----------------------------------"
  );
  //7. Printing the index of the good
  console.log("printing the index of good: " + str.indexOf("good"));
  console.log(
    "-------------------------------------------8----------------------------------"
  );
  //8. Printing the substring from the starting index 22
  console.log(
    "Printing the substring method from index 22: " + str.substring(22)
  );
  console.log("Printing the slice method from index 22: " + str.substring(22));
  console.log(
    "--------------------------------------------9---------------------------------"
  );
  //9. check the string end with "up"
  console.log("Is String end with 'up' : " + str.endsWith("up"));
  console.log(
    "---------------------------------------------10--------------------------------"
  );
  //10. check the string end with "up"
  console.log("Is String start with 'Hey' : " + str.endsWith("up"));
  console.log(
    "-----------------------------------------------------------------------------"
  );
}

stringHandsOn();
