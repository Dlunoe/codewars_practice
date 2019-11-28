// function multiply(a, b){
//     // console.log(a, b);
//     return a * b 
// }

// console.log(multiply(2,3));

function disemvowel(str) {
    var n = str.replace(/a|e|i|o|u|A|E|I|O|U/g, '');
    return n;
  }

  console.log(disemvowel("This website is for losers LOL!"));