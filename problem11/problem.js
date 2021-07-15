/**
 * Дан список целых чисел, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку,
 * сворачивая соседние по числовому ряду числа в диапазоны.
 */


function compress(list) {
    // your code here

    if (list.length === 0) {
        return "";
    }

    if (list.length === 1) {
        return `${list}`;
    }

    const sortedList = list.sort(function(a,b) {
        return a-b
    });


    let res = "";
    let range = [];

    for (let i = 0; i < sortedList.length; i++) {

        if ((sortedList[i+1] - sortedList[i]) === 1)   {

            range.push(sortedList[i]);

        //поиск конца диапазона
        }  else if ((sortedList[i] - sortedList[i - 1]) === 1 ) {

            range.push(sortedList[i]);
            res = `${res}${range[0]}-${range[range.length - 1]},`;

            range = [];

        } else {

            res += sortedList[i];


            if (i !== sortedList.length - 1) {
                res += ",";
            }
        }
    }

    return res;
}



console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2, 11])) // '1-4'
console.log(compress([1, 4])) // '1,4'
console.log(compress([13])) // 13
console.log(compress([])) // ''
