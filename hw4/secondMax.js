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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    var max1 = 0, max2 = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max1){
            max2 = max1;
            max1 = nums[i];
        }if(nums[i] > max2 && nums[i] != max1){
            max2 = nums[i];
        }
    }
    return max2;
}


function main() {
    // const n = +(readLine());
    // const nums = readLine().split(' ').map(Number);
    var nums = [2, 3, 6, 6, 5] 
    
    console.log(getSecondLargest(nums));
}

main();