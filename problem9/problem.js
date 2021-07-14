
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


let acc = 0;

function sum(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            sum(arr[i])
        }

        else {

            let sub = arr[i];

            if (typeof arr[i] !== "number") {
                sub = extractNumber(arr[i]);
            }

            acc = acc + sub;

        }
    }

    return acc;


}

console.log(sum([1, 'x', '2x', ['3', ['x2', '5']]])); // 11
