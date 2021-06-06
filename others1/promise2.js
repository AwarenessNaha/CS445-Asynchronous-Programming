function runAsync() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            //console.log('执行完成');
            resolve('随便什么数据');
        }, 2000);
    });
    console.log("p is:" + p);
    return p;
}

console.log("this is what returns:" + runAsync());

runAsync().then(function (data) {
    console.log(data);
    //后面可以用传过来的数据做些其他操作
    //......
});