/*
	* Дана строка (возможно, пустая), состоящая из букв A-Z и пробелов, разделяющих слова:
	* "QUICK FOX   JUMPS"
	* Нужно написать функцию, которая развернет слова:
	* "KCIUQ XOF   SPMUJ"
	* ""
	* "ABC"
 */

function spacedReverse(arr) {
    console.log(arr);

    function reverseArr(begin, end) {
        const len = end - begin + 1;
        let swap = "";
        let middle = len % 2 === 0 ? len / 2 : Math.ceil(len / 2);

        if (len < 2) {
            return;
        }

        for (let k = 0; k < middle; k++) {
            swap = arr[begin + k];
            arr[begin + k] = arr[end - k];
            arr[end - k] =  swap;
        }
    }

    let beginIndex = 0, endIndex = 0;


    for (let i = 0; i < arr.length; i++) {

        const isBegin = (arr[i] === " " && arr[i + 1] !== " ") || (i === 0 && arr[0] !== " ");
        const isLastSpace = i === (arr.length - 1) && arr[i] === " ";

        if (isLastSpace) {
            break;
        }

        if (isBegin) {
            let wordLen = 1;
            beginIndex = i === 0 ? 0: i + 1;

            for (let j = 0; j < wordLen; j++) {

                const isWordEnd = arr[i + j] !== " " && (arr[i + j + 1] === " ");
                const isArrEnd = (i + j + 1) === arr.length - 1;

                if (isArrEnd) {
                    endIndex = i + j + 1 === (arr.length - 1) ? i + j : i + j + 1;

                    break;

                } else if (isWordEnd) {
                    i += wordLen - 1;
                    endIndex = i;

                    break;
                } else {
                    wordLen += 1;
                }
            }

            reverseArr(beginIndex, endIndex);
        }
    }


    return arr;

}

spaceString1 = "QUICK FOX JUMPS";
//"KCIUQ XOF SPMUJ"

spaceString2 = "  QUICK FOX   JUMPS ";
// "  KCIUQ XOF   SPMUJ "

spaceString3 = "ABC";
// "CBA"


console.log(spacedReverse(spaceString1));
console.log(spacedReverse(spaceString2));
console.log(spacedReverse(spaceString3));
