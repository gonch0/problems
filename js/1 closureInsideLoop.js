var i = 10;
var array = [];

while (i--) {
    console.log('counter inside loop = ', i);

    array.push(function closureExample() {
        return i + i;
    });

}

console.log('counter after loop', i); // ??
console.log([array[1]()]); // ??
