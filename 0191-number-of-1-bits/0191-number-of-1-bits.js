/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {

let res = n.toString(2)
return res.split("").filter(num=>num==1).length

};