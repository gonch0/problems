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

// Решение 2

 new Promise((resolve) => {
    foo(resolve);
}).then((data1) => {
    console.log(data1);

    return new Promise((resolve) => {
        bar(resolve);

    }).then((data2) => {
        console.log(data2);
            return new Promise((resolve) => {
                baz(resolve);
            }).then((data3) => {
                console.log(data3)
            })
    })
})


// Promise.resolve([p1])


//
// const p = new Promise((resolve) => {
//     foo(resolve);
// })
//
// p.then(() => {
//     foo(console.log);
//     return new Promise(resolve => {
//         bar(resolve);
//     }).then(() => {
//         bar(console.log);
//         return new Promise(resolve => {
//             baz(resolve);
//         }).then(() => {
//             baz(console.log)
//         })
//
//     })
// })






// Решение 1 (не решение)

// new Promise(function(resolve) {
//     // resolve()
//     setTimeout(() => resolve(foo(console.log)), 100);
//
// }).then(function () {
//     return new Promise(function (resolve) {
//         setTimeout(() => resolve(bar(console.log)), 100);
//     })
//
// }).then(function()  {
//     return new Promise(function (resolve) {
//         setTimeout(() => resolve(baz(console.log)), 100);
//     })
// })

// Решение 1.2

// setTimeout(() => {
//     foo(console.log)
//     setTimeout(() => {
//         bar(console.log)
//         setTimeout(() => {
//             baz(console.log)}, 100);
//     }, 100)
// }, 100);



