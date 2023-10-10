const factorial = (f) => {
  let fact = 1;
  for (let i = f; i > 0; i--) {
    fact *= i;
  }
  return fact;
};
const permutation = (n, r) => {
  return factorial(n) / factorial(n - r);
};

const combination = (n, r) => {
  return permutation(n, r) / factorial(r);
};

const multiPermutation = (n, r) => {
  return n ** r;
};

const multiCombination = (n, r) => {
  return combination(n + r - 1, r);
};

module.exports = {
  permutation,
  combination,
  multiCombination,
  multiPermutation,
};
