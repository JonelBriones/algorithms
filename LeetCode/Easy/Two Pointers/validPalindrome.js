// Valid Palindrome

let s = 
"A man, a plan, a canal: Panama";
// "race a car";
// "";

var isPalindrome = function(s) {
    let newS = s.replace(/[^a-z0-9]/gi,'')
    let arr = [];
    let arrReverse = []
    for(i = 0; i < newS.length; i++) {
        // if(s.replace(/[^a-z0-9]/gi)) {
            arr.push(newS[i].toLowerCase())
            arrReverse.push(newS[i].toLowerCase())
        // }
    }
    let reverseArr = arrReverse.reverse();
    for(i=0; i < arr.length;i++) {
        if(arr[i]!==reverseArr[i]) {
            return false
        }
    }
    console.log(reverseArr,arr)
    console.log(newS)
    return true;
};
console.log(isPalindrome(s))