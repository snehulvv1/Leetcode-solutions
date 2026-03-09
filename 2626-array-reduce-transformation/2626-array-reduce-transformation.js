/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

  let result = init
  for(let i=0;i<=nums.length-1;i++){
    result = fn(result,nums[i])
  }
  return  result
};

console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr; },0))