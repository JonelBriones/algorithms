function charCount(str) {
    // lowercase all characters in string
    str = str.toLowerCase();
    // declare empty object
    let charCountObj = {};
    // loop through each char in string
    for(let i = 0; i < str.length;i++) {
        let key = str[i];
        charCountObj+=key
    }
    // for each char, push a key value pair to var object char:0
    // increment the pair if shown
    // return object
    return charCountObj;
}
console.log(charCount("Hello henry"))