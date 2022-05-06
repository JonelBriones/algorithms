// Push Front
let array = [1,2,3,4]

function pushFront(array,value) {
    let newArr = [];
    newArr.push(value);
    for(let i = 0; i < array.length; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}
// console.log(pushFront(array,0));
function reverseArr(array) {
    let reverseArr = []
    for(let i = array.length - 1; i >= 0; i--) {
        reverseArr.push(array[i])
    }
    return reverseArr
}
// Pop Front
function popFront(array) {
    let reverseArray = reverseArr(array)

    reverseArray.pop()

    let revertArr = reverseArr(reverseArray)
    return revertArr;
}
// console.log(popFront(array))

// Insert At

function insert(array,index,value) {
    array[index] = value;
    return array;
}
// console.log(insert(array,2,'goku'))

// Remove At
function removeAt(array,index) {
    return array[index]
}
// console.log(removeAt(array,2))

// Remove Duplicate

function removeDuplicate(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i]!==array[i+1]) {
            newArr.push(array[i])
        }
    }
    return newArr;
}

// console.log(removeDuplicate([1,2,2,4,5,5]))