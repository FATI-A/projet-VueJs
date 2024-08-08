function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

// Test
const fibSeq = fibonacci(10);
console.log(fibSeq); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120
