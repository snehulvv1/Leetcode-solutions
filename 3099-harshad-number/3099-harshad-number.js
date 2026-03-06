/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    
    let str = x.toString()
    let res = str.split("").reduce((sum,curr)=>{
        return sum+=Number(curr)
      
    },0)
    if(x%res ==0){
        return res
    }
    else{
        return -1
    }
};

console.log(sumOfTheDigitsOfHarshadNumber(18))