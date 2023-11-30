//BINARY SEARCH

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