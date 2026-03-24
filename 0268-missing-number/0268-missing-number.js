/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let  expectedsum = n*(n+1)/2
    let  ActualSum = 0 
    let largest = nums[0]
    for(let value of nums){
         ActualSum= ActualSum+value;
       

    }
 

   return expectedsum-ActualSum
};
console.log(missingNumber([3,0,1]))
