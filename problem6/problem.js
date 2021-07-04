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

// Решение 1

new Promise(function(resolve) {
    // resolve()
    setTimeout(() => resolve(foo(console.log)), 100);

}).then(function () {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(bar(console.log)), 100);
    })

}).then(function()  {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(baz(console.log)), 100);
    })
})
