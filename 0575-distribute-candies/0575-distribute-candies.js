/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {

    let uniquecandy = new Set(candyType)
    let unique = uniquecandy.size
    let canEat = candyType.length/2;
    return Math.min(canEat,unique)

};