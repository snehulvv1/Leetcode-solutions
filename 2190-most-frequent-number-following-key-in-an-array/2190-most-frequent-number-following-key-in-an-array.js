/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let map = {}
 for(let i=0;i<nums.length-1;i++){
    if(nums[i] == key){
       map[nums[i+1]] = (map[nums[i+1]]||0)+1
    }
 }
  return Number(Object.keys(map).reduce((a,b)=>{
    return map[a]>map[b]?a:b
  }))

    
};

