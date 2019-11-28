// function multiply(a, b){
//     // console.log(a, b);
//     return a * b 
// }

// console.log(multiply(2,3));

// function disemvowel(str) {
//     // var n = str.replace(/a|e|i|o|u|A|E|I|O|U/g, '');
//     var n = str.replace(/a|e|i|o|u/gi, '');
//     return n;
//   }

// console.log(disemvowel("This website is for losers LOL!"));

function repeatStr (n, s) {
    var str = '';
    for(i=0; i<n;i++){
        str = str + s;
    }
    return str;
    // return s.repeat(n);
  }

  console.log(repeatStr(6, "HelloWorld"))