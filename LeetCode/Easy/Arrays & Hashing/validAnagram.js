// 242 Valid Anagram

// Example 1
// let s = "anagram"
// let t = "nagaram"
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2
let s = "cat"
let t = "rat"
// Input: s = "rat", t = "car"
// Output: false~
var isAnagram = function(s, t) {
    let sArr = [];
    let tArr = [];
    if(s.length!==t.length) {
        return false;
    }
    for(i = 0; i < s.length; i++) {
        sArr.push(s[i]);
        tArr.push(t[i]);
    }
    sArr.sort();
    tArr.sort();
    console.log(sArr,tArr)
    let isAnagram = true
    for(i = 0; i < sArr.length;i++) {
        if(sArr[i]!==tArr[i]) {
            isAnagram = false;
        }
    }
    return isAnagram;
};
console.log(isAnagram(s,t))
/*
Runtime: 123 ms, faster than 34.83% of JavaScript online submissions for Valid Anagram.
Memory Usage: 49.2 MB, less than 11.87% of JavaScript online submissions for Valid Anagram.
*/