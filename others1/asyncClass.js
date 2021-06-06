class Waiter {
    async wait() {
        return await Promise.resolve(7);
    }
}

new Waiter()
    .wait()
    .then(console.log); // 1 (this is the same as (result => alert(result)))