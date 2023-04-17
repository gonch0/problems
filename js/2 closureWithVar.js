// Что в консоли?

const arr = [10, 12, 15, 21];

for (var k = 0; k < arr.length; k++) {

    setTimeout(function() {
            console.log('Index: ' + k + ', element: ' + arr[k]);
        }, 3000);
}

// Index: ??, element: ??
// Index: ??, element: ??
// Index: ??, element: ??
// Index: ??, element: ??


for (var i = 0; i < arr.length; i++) {
    setTimeout(function(local_i) {
        return function() {
            console.log('Index: ' + local_i + ', element: ' + arr[local_i]);
        }}(i), 3000);
}

// Index: ??, element: ??
// Index: ??, element: ??
// Index: ??, element: ??
// Index: ??, element: ??

