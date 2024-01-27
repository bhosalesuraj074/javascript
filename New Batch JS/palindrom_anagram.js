function isPalindrome(str){
  return str == str.split('').reverse().join('') ? true :false;
}
console.log(isPalindrome('madam'));

function isAnagram(str1, str2){
  return string_sort(str1)  == string_sort(str2) ? true : false;
}
function string_sort(str){
    return str.split('').sort().join('');
}
console.log(isAnagram('hello', 'world'));