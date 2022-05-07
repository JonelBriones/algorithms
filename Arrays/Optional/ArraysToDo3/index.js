let negativeArr = [2,-5,-10,4,2,-4]
let array = [-5,5,2,4,10,15,10,-1]
function removeNegative(array) {
    let positiveArr = []
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > 0) {
            positiveArr.push(array[i])
        }
    }
    return positiveArr
}
// console.log(removeNegative(negativeArr))

function secondToLast(array) {
    return array[array.length - 2]
}
// console.log(secondToLast(array))

function secondLargest(array) {
    let largestNum = 0;
    for(let i = 0; i < array.length - 1; i++) {

        if(array[i] > largestNum) {
            largestNum = array[i]
        }
    }
    return largestNum
}
// console.log(secondLargest(array))

function nthToLast(array,value) {
    if (array.length < value) {
        return null
    }
    else return array[array.length - value]
}
// console.log(nthToLast(array,3))

function skyline(array) {
    let prevArray = 0;
    let heightArray = []
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > prevArray) {
            prevArray = array[i]
            heightArray.push(prevArray)
        }
    }
    return heightArray
}
console.log(skyline(array))