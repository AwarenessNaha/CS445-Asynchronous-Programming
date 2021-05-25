'use strict'
//const switcher = document.querySelector('.btn');
window.onload = function () {

    document.getElementById('darkBtn').addEventListener('click', function () {
        const bodyElement = document.getElementById('main-content');
        bodyElement.style.backgroundColor = 'green';
        bodyElement.style.color = 'black';
    });

    document.getElementById('lightBtn').addEventListener('click', function () {
        const bodyElement = document.getElementById('main-content');
        bodyElement.style.backgroundColor = 'black';
        bodyElement.style.color = 'green';
    });

    document.getElementById('switchBtn').addEventListener('click', function () {
        const bodyElement = document.getElementById('main-content');
        const backColor = bodyElement.style.backgroundColor;
        if(backColor === 'green'){
            bodyElement.style.backgroundColor = 'black';
            bodyElement.style.color = 'green';
        }else{
            bodyElement.style.backgroundColor = 'green';
            bodyElement.style.color = 'black';
        }
       
    });
}




