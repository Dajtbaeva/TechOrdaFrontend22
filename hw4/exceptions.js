// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    var splitted = s.split("");
    var reversed = splitted.reverse();
    var res = reversed.join("");
    console.log(res);
  } catch {
    console.log("s.split is not a function");
    console.log(s);
  }
}

function main() {
  // const s = eval(readLine());
  const s = "1234";
  // or
  // const s = 1234;

  reverseString(s);
}

main();
