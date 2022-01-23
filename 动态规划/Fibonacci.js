const cache = {};
let num = 0;
console.log("123123");
var fib = function(n) {
    console.log("fib", num++);
    let result;
    if (typeof cache[n] === "number") {
        return cache[n];
    } else if (n === 0 || n === 1) {
        cache[n] = n;
        return n;
    } else {
        const result = fib(n - 1) + fib(n - 2);
        cache[n] = result;
        return result;
    }
};

fib(12);