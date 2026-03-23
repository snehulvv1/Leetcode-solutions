/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 2) return n;

  let prev1 = 2; // ways(2)
  let prev2 = 1; // ways(1)

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
console.log(climbStairs(5))