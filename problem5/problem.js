// var i = 10;
// var array = [];
//
// while (i--) {
//     console.log('counter inside loop = ', i);
//
//     array.push(function closureExample() {
//         return i + i;
//     });
//
// }
//
// console.log('counter after loop', i);
//
// console.log([array[0]()]); // -2
// console.log([array[1]()]); // -2




// Problem 5.2


const arr = [10, 12, 15, 21];

for (var k = 0; k < arr.length; k++) {


    setTimeout(function() {
            console.log('Index: ' + k + ', element: ' + arr[k]);
        }, 3000);

}
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined


for (var i = 0; i < arr.length; i++) {
    setTimeout(function(local_i) {
        console.log('i inside wrapper = ', i);
        console.log('local_i inside wrapper = ', local_i);

        return function() {
            console.log('i inside inner = ', i);
            console.log('local_i inside inner = ', local_i);

            console.log('Index: ' + local_i + ', element: ' + arr[local_i]);
        }}(i), 3000);

}


// Index: 0, element: 10
// Index: 1, element: 12
// Index: 2, element: 15
// Index: 3, element: 21
