/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let freq = {}
   let maxCount = 0;
   let maxElement = null;
   for(let value of nums){
      freq[value] = (freq[value]||0)+1

      if(freq[value]>maxCount){
        maxCount = freq[value]
        maxElement = value
      }
   }
   return maxElement;
  
};
console.log(majorityElement([3,2,3]))