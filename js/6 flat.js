
/*
Развернуть массив и просуммировать элементы

Валидными числовыми значениями являются так же строки, которые начинаются с цифр.
В этом случае в качестве числового значения нужно использовать эту начальную последовательность цифр.


	[1, 'x', '2x', ['3', ['x2', '5']
 */

function extractNumber(data) {

    if (typeof data === "number" ) {
        return data;
    }

    const firstSymbol = parseInt(data[0], 10);

    if (isNaN(firstSymbol)) {
        return 0;
    }

    const numsFromStr = data.replace(/^\D+/g, '');

    if (numsFromStr === "") {
        return 0;
    }

    return parseInt(numsFromStr, 10);
}



function sum(arr) {

    return arr.reduce((summary, item) => {


        if (Array.isArray(item)) {
            return summary + sum(item);
        }

        return summary + extractNumber(item)

    }, 0);


}

console.log(sum([1, 'x', '2x', ['3', ['x2', '5']]])); // 11
