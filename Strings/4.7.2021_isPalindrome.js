// PDXWIT Interview Question


// Assign the string to a new variable, removing all the extra characters and 
// reversing it
// Assign the string another new variable, removing all the extra characters and 
// then compare the two strings together
function isPalindrome(s) {
    let reversedString = s.replace(/[^a-zA-Z0-9]/g,'').split("").reverse().join("").toLowerCase()
    let origStringButJoined = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    return reversedString === origStringButJoined
}

isPalindrome("A man, a plan, a canal: Panama")