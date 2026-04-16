/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let value = val
    function toBe(n){
       if(n===value){
        return true
       }else{
         throw new Error("Not Equal")
       }
    }
    function notToBe(m){
        if(m!==value){
            return true
        }else{
            throw new Error("Equal")
        }
    }
    return {toBe,notToBe}
   
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */