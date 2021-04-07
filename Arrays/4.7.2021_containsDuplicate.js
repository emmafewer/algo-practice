// PDXWIT Interview Question 

// Create a new Set (collection of unique values), and see whether
// the size of the set is shorter than the size of the original Array.
function containsDuplicateBest(nums) {
    let set = new Set(nums);
    return (set.size < nums.length);
};


// Create an object, Loop through the array,
// Add the character to the object with a tally of 1 if the 
// character does not already exist in the object, if it does set the 
// answer to true. Return the answer after the loop is done
function containsDuplicateFirstAttempt(nums) {
    let check = {}
    let answer = false
    nums.forEach(char => {
        if (check[char]) {
            answer = true
        } else {
            check[char] = 1
        }
    })
    return answer
};

containsDuplicateBest([1,2,3,1])