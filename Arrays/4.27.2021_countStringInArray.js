// Given an array of strings and a string, count how many times the string appears.

function countString(arr, str) {
    let count = 0
    for (i=0; i<arr.length; i++) {
      if (arr[i].includes(str)) {
        for (j=0; j<arr[i].length; j++) {
          if (arr[i][j] + arr[i][j+1] === str) {
            count++
          }
        }
      }
    }
    return count
  }
  
  countString(["aab", "ccd", "eef", "ghg", "aax", "aataad"], "aa")

  // In this function, we loop through the array to see if each string contains the given string
  // If so, then loop the array string and see how many times the given string appears

  // As an alternative, I could have joined the array to be one string, then looped through it to see how many
  // times the given string appears.

  function countString2(arr, str) {
    let count = 0
    let joinedArray = arr.join("")
    for (i=0; i<joinedArray.length; i++) {
      if (joinedArray[i] + joinedArray[i+1] === str) {
        count++
      }
    }
    return count
  }

  countString2(["aab", "ccd", "eef", "ghg", "aax", "aataad"], "aa")