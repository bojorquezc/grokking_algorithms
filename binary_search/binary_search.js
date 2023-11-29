// Function to generate arrays of 1 increment of determined length
function generateArray(length) {
    let newArray = [];
    for (let index = 0; index < length; index++) {
        newArray.push(index);
    }
    return newArray;
}
const myList = [1, 3, 5, 7, 9];

function binarySearch(item, list) {        
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const midPoint = Math.floor((low + high) / 2);
        const guess = list[midPoint];

        if (guess === item) {
            return midPoint;
        } else if (guess > item) {
            high = midPoint - 1;
        } else {
            low = midPoint + 1;
        }
    }
    return null;
}

// EXERCISE 1.1
//Suppose you have a sorted list of 128 names, and you’re searching
//through it using binary search. What’s the maximum number of
//steps it would take?
// ANSWER: It would take 7 steps, log₂(128) = 7

// EXERCISE 1.2
// Suppose you double the size of the list. What’s the maximum
// number of steps now?
// ANSWER: It would take 8 steps, log₂(256) = 8