function removeDuplicate(array) {
    let nonDuplicates = []
    let currentIndex = 0;
    for(i = 0; i < array.length; i ++) {
        currentIndex = i
        for(j = currentIndex + 1; j < array.length; j++) {
            console.log("currentIndex",array[currentIndex])
            if(array[j]===array[currentIndex]) {
                console.log(array[j])
                // for(let d = 0; d < nonDuplicates.length; d++) {
                //     if(currentIndex===nonDuplicates[d]) {
                        nonDuplicates.push(array[currentIndex])
                //     }
                // }
            }
        }
    }
    return nonDuplicates
}
console.log(removeDuplicate([1,2,2,3,1,5,7,2]))