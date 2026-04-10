/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let obj = {}
    let pairsCount = 0
for(let value of nums){
    obj[value] = (obj[value]||0)+1
}
for(let key in obj){
  pairsCount+=  Math.floor( obj[key]/2)
}
let leftover = nums.length-pairsCount*2
return [pairsCount,leftover]
   
};