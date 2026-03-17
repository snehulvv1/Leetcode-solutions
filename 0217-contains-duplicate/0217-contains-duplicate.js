/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let set = new Set(nums)
    if(nums.length!==set.size){
        return true
    }
    return false
    
};

console.log(containsDuplicate([1,2,3,4]))