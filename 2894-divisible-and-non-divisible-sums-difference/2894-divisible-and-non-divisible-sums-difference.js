/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num2 = []
    let num1 = []
    for(let i=1;i<=n;i++){
        if(i%m==0){
            num2.push(i)
        }else{
            num1.push(i)

        }
    }
   let num1Sum = num1.reduce((sum,curr)=>{
    sum = sum+curr;
    return sum
   },0)
   let num2Sum = num2.reduce((sum,curr)=>{
   sum= sum+curr;
    return sum
   },0)

   return num1Sum-num2Sum
    
};
console.log(differenceOfSums(10,3))