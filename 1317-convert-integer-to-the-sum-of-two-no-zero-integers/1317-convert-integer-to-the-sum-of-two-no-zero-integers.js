/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
      function haszero(num){
       return  num.toString().includes('0')
      }
      for(let a=1;a<n;a++){
        let b=n-a

        if(!haszero(a)&& !haszero(b)){
            return [a,b]
        }
      }

    }
  
 



