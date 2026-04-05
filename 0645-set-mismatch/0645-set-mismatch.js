/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let freq = {};
    let duplicate = -1;
    let missing = -1;

    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    
    for (let i = 1; i <= nums.length; i++) {
        if (freq[i] === 2) {
            duplicate = i;
        }
        if (!freq[i]) {
            missing = i;
        }
    }

    return [duplicate, missing];
};