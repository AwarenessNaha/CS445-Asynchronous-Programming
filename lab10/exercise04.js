const fibonacci = (function () {
    const lookUp = {};
    function fib(n) {
        let num;
        if (n in lookUp) {
            num = lookUp[n];
        } else {
            if (n <= 1) {
                return 1;
            } else {
                num = fib(n - 1) + fib(n - 2);
            }
            lookUp[n] = num
        }
        return num;
    }
    return fib;
})();

console.log(fibonacci(18));

function fibonacci99(n) {
    let num1;
    if (n === 0 || n === 1)
        num1 = n;
    else
        num1 = fibonacci99(n - 1) + fibonacci99(n - 2);
    return num1;
}

console.time("fast");
console.log(fibonacci(1118));
console.timeEnd("fast");//fast: 1.917ms
console.time("slow");
console.log(fibonacci99(28));
console.timeEnd("slow"); //slow: 94.15ms
