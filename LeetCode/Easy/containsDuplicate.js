// Contains Duplicate
// let nums = [1,2,3,4]
let nums = [1,2,3,3]
var containsDuplicate = function(nums) {
    let isDuplicate = false;
    let index = 0;
    for(i = 0; i < nums.length;i++) {
       for(j = i + 1; j < nums.length; j++) {
           if(nums[i]===nums[j]) {
               return true;
           }
       } 
    }
    return false;

};
console.log(containsDuplicate(nums))