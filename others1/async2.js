console.log('start'); async function foo() {
    return 'done!';
}
async function bar() {
    console.log('inside bar - start');
    let result = await foo();
    console.log(result); // "done!" 
    console.log('inside bar - end');
}

async function bar1() {
    console.log('inside bar - start');
    let result = foo();
    console.log(result); // "done!" 
    console.log('inside bar - end');
}
bar();

console.log("==========");

bar1();