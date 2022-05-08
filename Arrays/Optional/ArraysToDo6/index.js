/*
Binary Search is the action of halfing an array and checking both sides.

*/

/* 
    A linear search will iterrate through the entire loop
    and returns until the array at index matches the target value.
    This will take longer as the function will go through every
    individual index from start to end
*/
function linearSearch(array,value) {
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] === value) {
            return i;
        } 
    }
    return -1;
}
// console.log(linearSearch([1,2,3,4,5,6,7,8,9,10],7))


/* 
    *ARRAY MUST BE SORTED FOR BINARY SEARCH TO WORK*

    A binary search will have a start, middle and end.
    The middle will split the array in two halves.

    If the target value is < middle,
    then the value is within that half of the array. 
    Make the new end point by letting end = middle - 1.

    If the target value is > middle, start = middle + 1.
*/
function binarySearch(array,val) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = left + Math.floor((right - left / 2)); // Incase if array is an odd number

        if(val === array[middle]) {
            return middle;
        }

        if(val < array[middle]) {
            right = middle - 1;
        } else left = middle + 1;

    }
    return -1
}
// console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12],2))
