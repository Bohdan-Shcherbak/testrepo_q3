// function getParticipants(handshakes){
//   const rfr = 2;
//   switch (handshakes) {
//     case 0:
//       return 0;
//       break;
//     case 1:
//       return 2;
//       break;
//     case 2:
//     case 3:
//     case 4:
//       return 3;
//       break;
//     default:
//       return handshakes - 2;
//       break;
//   }

//   // return handshakes / rfr
// }
// 2.3 4 3
// .5 4

// function getParticipants(handshakes){
// if (handshakes < 10 && handshakes > 6){
//   return 5
// }
// else if(handshakes< 15 && handshakes > 9){
//   return 6
// }

// else if(handshakes< 15 && handshakes > 9){
//   return 6
// }
// }
// 0.0
// 1 2
// 2 3
// 4 4
// 7 5
// 11 6
// 16 7
// 3 3


// 6 для 4
// 10 для 5
// 15 для 6
// 21 для 7
// 28 для 8
// 7 i 5
// 11 i 6
// 16 i 7



function getParticipants(handshakes){
  let Participants = 0;
  let result = 2
  if(handshakes == 0){
    return 0
  } else if(handshakes == 1){
    return 2
  } else{
    for(let i = 2; i<=handshakes;){
      let resultold = result
      result = result +1
      // let rar
      // console.log(result);
      // Participants = Participants + result
      // console.log(Participants);
    i = i + resultold
    console.log(i);
  }
}
return result
}
// console.log(i);
    // let number =+ i
// console.log(number);
// re +1
  
console.log(getParticipants(10));


//   node test.js
