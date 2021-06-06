function getNumber() {
    var p = new Promise(function (res, rej) {
        //做一些异步操作
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
            if (num <= 5) {
                res(num);
            }
            else {
                rej('数字太大了');
            }
        }, 2000);
    });
    return p;
}

getNumber()
    .then(
        function (data) {
            console.log('resolved');
            console.log(data);
            console.log(somedata);
        },
        function (reason, data) {
            console.log('rejected');
            console.log(reason);
        }
    );