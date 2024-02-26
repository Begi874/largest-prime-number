const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const n = parseInt(prompt("Enter a number: "));

/** 
 * TODO: Find the largest positive prime number <= n.
 * A prime number is a natural number greater than 1 whose only 
 * factors are 1 and the number itself. That is, it can only be 
 * divided equally by 1 and itself.
 * Natural numbers are positive integers such as 1, 5, 201, 229999 
 * etc. The number 0, fractions, decimals, and negative numbers
 * are not natural numbers.
 */
let num = undefined;
let prime = true;
  if (n % 2 == 0 && n != 2) prime = false;
  if (n % 3 == 0 && n != 3) prime = false;
  let m = Math.sqrt(n);
  for (let i = 5; i <= m; i += 6) {
  if (n % i == 0) prime = false;
  if (n % (i + 2) == 0) prime = false;
  }
  if (prime) num = n;

// DO NOT CHANGE ANYTHING BELOW THIS.
console.log(num);

module.exports = {
  num,
};
