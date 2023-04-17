/*

4.1
Напишите функцию sum
	sum([2, 4, 6]) => 12

 */

function sum(list) {
    // your code here
    return list.reduce((acc, item) => {
        return acc + item;
    }, 0)
}

console.log(sum([2, 4, 6]));


