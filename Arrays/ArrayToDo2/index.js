const { ThemeProvider } = require("react-bootstrap");

let array = [2,5,3,2,1,8,9,15]
let array2 = ['baskeball','volleyball','soccer']

// Reverse
function reverse(array) {
    let reversedArr = [];
    for(let i = array.length - 1; i >= 0; i--) {
        reversedArr.push(array[i])
    }
    return reversedArr;
}
// console.log(reverse(array))

// Rotate

function rotate(array,shiftBy) {
    array.push('temp')
    for(i = 0; i < shiftBy;i++) {
        let reverseArr = reverse(array)
        console.log("before",reverseArr)
            for(j=0;j<reverseArr.length; j++) {
                if(j===0) {
                    reverseArr[j] = reverseArr[reverseArr.length - 1]
                } else
                reverseArr[j] = reverseArr[j+1]
                console.log("after",reverseArr)
            }
    }
    return array
}

console.log(rotate(array,4))

function filter(array,min,max) {
    let minMaxArr = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= min && array[i] <= max) {
            console.log(array[i])
            minMaxArr.push(array[i])
        }
    }
    return minMaxArr
}
// console.log(filter(array,2,7))

// Concat

function concatString(array,secondArray) {
    let concatString = [...array,...secondArray]
    return concatString
}
// console.log(concatString(array,array2))




