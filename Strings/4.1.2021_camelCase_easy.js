// Strings
// 6 kyu Codewars
// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase=function(){
  return this.split(" ").map(word => word[0].toUpperCase()+word.slice(1)).join("")
}

"this word".camelCase()