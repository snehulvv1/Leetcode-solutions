/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
let res ={}
for(let value of s){
    res[value] = (res[value]||0)+1
}
for(let i=0;i<s.length;i++){
    if(res[s[i]]==1){
        return i
    }
}
return -1

}
