var reverse = (str) =>{
    var str2="";
  for (let index = str.length-1 ; index >= 0; index--)
  {
       str2 += str[index];
  }
  return str2;
}
console.log(reverse("Do it anyhow"));



var countVowel= function (str)
{
  var count=0, vowel=0;
  var v= str.toLowerCase();
  for (let index = 0; index < str.length-1; index++) {
     if(str[index] == ' ')
     {
        ++count;
     }
    if(v[index] == 'a' || v[index] == 'e' || v[index] == 'o'
        ||v[index] == 'u' ||v[index] == 'i')
        {
            ++vowel;
        }

        
  }
  console.log("Number spaces: "+count);
        console.log("Number of vowels: "+vowel)

}
countVowel("I am angular champ");
