/*

 * Дан список целых чисел, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку,
 * сворачивая соседние по числовому ряду числа в диапазоны.
 
console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
compress([1, 4, 3, 2]) // '1-4'
compress([1, 4]) // '1,4'

 */

function compress(list) {
    // your code here
    
    list.sort((a, b) => a - b);

    var res = [];
    var L = 0;
    var R = 0;


    while (R < list.length) {
        if (list[R] + 1 === list[R + 1]) {
            R++;
        } else {
            if (L === R) {
                res.push(String(list[L]));    
            } else {
                res.push(`${list[L]}-${list[R]}`);
            }

            R++;
            L = R;
        }
    }

    return res.join(',');

}

console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]));
console.log(compress([0]));
console.log(compress([1,3,5]));


