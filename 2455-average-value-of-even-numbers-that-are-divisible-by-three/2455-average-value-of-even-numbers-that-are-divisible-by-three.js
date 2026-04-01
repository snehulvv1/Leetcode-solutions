/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
 let average = 0;
  let count =0;
    for(let values of nums){
        if(values % 6==0){
            average+=values
            count++;

        }
    }
  if(count ===0){
    return 0
  }
  else{
    return Math.floor(average / count)
  }
 
};
console.log(averageValue([1,3,6,10,12,15]))

