function primeNumber(a):void {
  if (a <= 1) {
    console.log('NO');
    return;
  }

  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      console.log('NO');
      return;
    }
  }

  console.log('YES');
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
