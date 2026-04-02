/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let newArr = []
   let arr =  s.split(" ")
   for(let i=0;i<=k-1;i++){
     newArr.push(arr[i])
   }
   return newArr.join(" ")
    
};