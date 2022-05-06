
let array = [5,2,4,7,1,6]

function MinToFront(array) {
    let min = 0;
    let minToFront = [];
    let restOfArr = [];
    for(let i = 0; i < array.length; i++) {
        if(!min) {
            min = array[i];
        } 
        else if (array[i] < min) {
            min = array[i];
        }
    }
    minToFront.push(min)
    for(let i = 0; i < array.length; i++) {
        if(array[i]> min) {
            minToFront.push(array[i])
        }
    }
    return minToFront;
}
console.log(MinToFront(array))