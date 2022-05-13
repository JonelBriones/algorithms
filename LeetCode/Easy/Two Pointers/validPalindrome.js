// Valid Palindrome

let s = 
"A man, a plan, a canal: Panama";
// "race a car";
// "";

var isPalindromeV1 = function(s) {
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


// While Loop Version
var isPalindromeV2 = function(s) {
    let newS = s.replace(/[^a-z0-9]/gi,'');
    let newSLowerCase = newS.toLowerCase();
    let left = 0;
    let right = newSLowerCase.length - 1;
    while(left < right) {
        if(newSLowerCase[left]!==newSLowerCase[right]) {
            return false;
        }
        left++
        right--
    }
    console.log(newSLowerCase)
    return true
};



console.log(isPalindromeV2(s))