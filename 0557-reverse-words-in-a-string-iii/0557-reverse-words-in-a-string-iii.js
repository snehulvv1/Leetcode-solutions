/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ")
   return  arr.map((str)=>str.split("").reverse().join("")).join(" ")
};