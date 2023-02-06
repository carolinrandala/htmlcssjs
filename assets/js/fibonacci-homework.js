//SOLUTION
let fibonacciSequence = [0, 1];

for (let i = 2; i <= 10; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
}
console.log(fibonacciSequence[9]);
