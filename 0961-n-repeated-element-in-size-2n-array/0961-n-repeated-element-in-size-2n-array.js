/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
   
    
  let res = {}
  for(let value of nums){
    res[value] = (res[value]||0)+1

    if(res[value]>1){
        return value
    }
  
  }

  
  
};
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))