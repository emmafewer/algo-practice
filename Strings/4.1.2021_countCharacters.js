function count (string) {  
    let obj = {}  
    string.split("").forEach(char => {
      (char in obj)?
        obj[char]++ : obj[char] = 1
    })
    return obj
  }
  
  count("")