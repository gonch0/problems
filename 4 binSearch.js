
/*
Реализовать функцию бинарного поиска по отсортированному массиву

	binSearch([1, 3, 5, 7, 9, 11, 47], 46) // 6

 */

function binSearch(arr, item) {

    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {

        const mid = r + l;
        const guess = arr[mid];

        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            console.log(guess)
            r =  mid -1;

        } else {
            l = mid + 1;
        }
    }

    return "Not found";


}

console.log(binSearch([1, 3, 5, 7, 9, 11, 42, 47], 4))































// function binSearch(arr, item) {
//
//     let indexLeft = 0;
//     let indexRight = arr.length - 1;
//
//     while (indexLeft < indexRight) {
//
//         const indexMid = indexLeft + indexRight;
//         const guess = arr[indexMid];
//
//         if (guess === item) {
//             return indexMid
//         }
//
//         if (guess > item) {
//             indexRight = indexMid - 1;
//         } else {
//             indexLeft = indexMid + 1;
//         }
//
//     }
//
//     return "Not found";
//
//
// }
