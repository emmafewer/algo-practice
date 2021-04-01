// Hackerrank
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a, d) {
    let splice = a.splice(0, d)
    splice.forEach(n => a.push(n))
    return a
}

rotLeft([1,2,3,4,5], 2)