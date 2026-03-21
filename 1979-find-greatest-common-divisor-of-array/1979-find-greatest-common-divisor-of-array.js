/**
 * @param {number[]} nums
 * @return {number}
 */

var findGCD = function(nums) {
    let largest=nums[0]
    let smallest = nums[0]
    for(let value of nums){
        if(value>largest){
            largest = value
        }else if(value<smallest){
            smallest = value
        }
    }
   function gcd(a,b){
    while(b!==0){
       
        let temp = b
        b=a%b
        a=temp
    }
    return a;
   }
   return gcd(largest,smallest)
    
};

console.log(findGCD([5,2,3,6,4,8]))