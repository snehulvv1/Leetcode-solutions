/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   for(let i=0;i<=nums.length-1;i++){
    let count=0
    for(j=0;j<=nums.length-1;j++){
        if(nums[i]==nums[j]){
            count++;
        }
    }
    if(count==1){
        return nums[i]
    }
   }
};
console.log(singleNumber([2,2,3,2]))