#!/usr/bin/env node
// Fibonacci sequence generator.
function fib(n) {
  const seq = [0n, 1n];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

const n = parseInt(process.argv[2], 10) || 10;
if (n < 1) {
  console.error("Term count must be >= 1");
  process.exit(1);
}
console.log(`Fibonacci (${n} terms): ${fib(n).join(", ")}`);
