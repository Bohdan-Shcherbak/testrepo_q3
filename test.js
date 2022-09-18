function duplicateEncode(word){
  // let newstr = word;
  const newstr = [...new Set(word)]
  console.log(newstr);
  let result = 'newstr';
// for (let i = 0; i < word.length; i++) {
//   // for (let j = i; j < word.length; j++) {
//     // console.log(word[i]);

//   // }  
//   // let trt = word.substring(i, i+1)
//   // let rtr = word.replace(/word[i]/g, '')
//   // // console.log(trt);
//   // console.log(rtr);
//   if(word[i].repeat(!1) == word){
    
//     console.log('no');
//     result = result + '\('
//   } else {console.log('yes');
//   result = result + '\)'
// }
// }
  return result
}
  
console.log(duplicateEncode('elset'));


//   node test.js
function mergeArrays(arr1, arr2) { 
  const newArrow = [...arr1, ...arr2].sort(compareNumbers = (a,b) => a - b);
  newArrowDelete = new Set(newArrow);
  console.log(newArrowDelete);
  return [...newArrowDelete];
}

console.log(mergeArrays([1,2,3],[2,3,4]));