// PDXWIT Interview Question 

// Turn each string into an Array, sort each Array, then compare if they match
function isAnagram(s, t) {
    let sortedS = s.split("").sort().join("")
    let sortedT = t.split("").sort().join("")
    return sortedS === sortedT
};

isAnagram("hello", "oell")