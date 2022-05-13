// Two Sum

/* 
return the indices of two numbers that add to the target
*/
let nums = [2,7,11,15]
target = 9

var twoSum = function(nums, target) {
    let twoNums = [];
    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if(nums[i]+nums[j]===target) {
                twoNums.push(i)
                twoNums.push(j)
            }
        }
    }
    return twoNums;
};
/*
Runtime: 222 ms, faster than 13.07% of JavaScript online submissions for Two Sum.
Memory Usage: 41.9 MB, less than 96.63% of JavaScript online submissions for Two Sum.
*/