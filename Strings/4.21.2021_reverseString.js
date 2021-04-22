function reverseString(string) {
    let newString = ""
    for (let i = string.length-1; i >=0; i--) {
      newString += string[i]
    }
    return newString
}
reverseString("hello girl")
  
function reverseStringRecursion(str) {
    if (str === "")
        return "";
    else
        return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}
reverseStringRecursion("hello")