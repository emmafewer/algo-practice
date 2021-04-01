// Roman Numerals
// 6 kyu Codewars
// https://www.codewars.com/kata/51b6249c4612257ac0000005/


function solution(roman){
    let rNumerals = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    
    return roman.split("").map(num => rNumerals[num]).reduce((a,b) => a < b ? b-a : a+b)
}

solution("XXI")