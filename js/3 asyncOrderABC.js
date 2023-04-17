/*
Даны 3 асинхронные функции со случайным setTimeout
Нужно написать код, который выведет в консоль:
A
B
C

без использования async/await и коллбэков

function foo(callback) {
    setTimeout(function() {
        callback('A');
    }, Math.random()*100);
}

function bar(callback) {
    setTimeout(function() {
        callback('B');
    }, Math.random()*100);
}

function baz(callback) {
    setTimeout(function() {
        callback('C');
    }, Math.random()*100);
}

*/


/*
function foo(callback) {
    setTimeout(function () {
        callback('A');
    }, Math.random() * 100);
}

function bar(callback) {
    setTimeout(function () {
        callback('B');
    }, Math.random() * 100);
}

function baz(callback) {
    setTimeout(function () {
        callback('C');
    }, Math.random() * 100);
}

new Promise((resolve) => {
    foo(resolve);
}).then((a) => {
    console.log(a);
    return new Promise((resolve) => {
        bar(resolve);
    }).then((b) => {
        console.log(b);
        return new Promise((resolve) => {
            baz(resolve);
        }).then((c) => {
            console.log(c);
        });
    });
});

*/