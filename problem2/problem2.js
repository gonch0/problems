

spaceString1 = "QUICK FOX JUMPS";
//"KCIUQ XOF SPMUJ"

spaceString2 = "  QUICK FOX   JUMPS ";
// "  KCIUQ XOF   SPMUJ "


spaceString3 = "ABC";
// "CBA"



function spacedReverse(str) {
    const arr = str.split(""),
        mixedArr = [],
        separator = "SEPARATOR",
        res = [];

    for (let i = 0; i < arr.length; i++) {

        mixedArr.push(arr[i]);

        const isBegin = arr[i] === " " && arr[i + 1] !== " ";
        const isEnd = arr[i] !== " " && arr[i + 1] === " ";

        if (isBegin || isEnd)  {
            mixedArr.push(separator);
        }
    }

    const separatedArr = mixedArr.join("").split(separator);

    for (let i = 0; i < separatedArr.length; i++) {

        const isSpace = separatedArr[i][0] === "" || separatedArr[i][0] === " ";

        if(!isSpace) {
            const reversedWord = separatedArr[i].split("").reverse();
            res.push(reversedWord.join(""));
        } else {
            res.push(separatedArr[i]);
        }

    }

    return res.join("");

}


console.log(spacedReverse(spaceString1));
console.log(spacedReverse(spaceString2));
console.log(spacedReverse(spaceString3));
