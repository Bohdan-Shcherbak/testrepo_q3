function isIsogram(str){
  str = str.toLowerCase();
  let str1 = '';
  let result;
for(let i = 0;i<=str.length;i++){
  if(str1.includes(str[i]) == true){
    result = false;
    console.log('yes');
    break;
  } else {
    result = true;
    console.log('no');

  }
  str1 += str[i];

  console.log(str1);
}
return result
}


function isIsogram(str){
  let result;

function rfr(a,b){
  // if(a == b){
  //   return false;
  // } else { return true}
  return a == b? result = false : result = true;
}
str.replace(/a-z/gi, rfr(a,z));
return result
}
console.log(isIsogram('eerte'));

//   node test.js
