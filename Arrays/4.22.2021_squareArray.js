// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.*/
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121] 

function squareArray(arr) {
  return arr.map(n => n*n).sort((a,b) => a - b)
}

squareArray([-7,-3,2,3,11])