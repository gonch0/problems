spaceString1 = "QUICK FOX JUMPS ";
//"KCIUQ XOF SPMUJ"
spaceArr1 = spaceString1.split("");


// spaceString2 = "  QUICK FOX   JUMPS ";
spaceString2 = "  FOX  QUICK  QUICK ";
// "  KCIUQ XOF   SPMUJ "
spaceArr2 = spaceString2.split("");

spaceString3 = "ABC";
// "CBA"
spaceArr3 = spaceString3.split("");


//. но следующий усложняющий вопрос: представь, что тебе на вход приходит сразу arr
//
// и ты не имеешь права использовать дополнительную память
//
// ну то есть переменные можно, а вот копировать входной массив, его куски и проч — нельзя
//
// надо переупорядочить arr так, чтобы стало збс


function spacedReverse(arr) {
    console.log(arr);

    function reverseArr(begin, end) {

        // console.log('');
        console.log(begin, end);
        const len = end - begin;

        if (len < 2) {
            return;
        }

        const swap = "";
        const middle = len / 2;


        if (middle % 2 === 0) {
            console.log('EVEN');
        } else {
            console.log('ODD');
        }

        //
        // for (let k = begin; k < end; l++) {
        //
        //
        // }
    }

    let beginIndex = 0, endIndex = 0;


    for (let i = 0; i < arr.length; i++) {

        const isBegin = (arr[i] === " " && arr[i + 1] !== " ") || (i === 0 && arr[0] !== " ");


        const isEnd3 = i === (arr.length - 1) && arr[i] === " ";

        if (isEnd3) {
            console.log('EXIT');
            break;
        }

        if (isBegin) {
            let wordLen = 1;

            beginIndex = i === 0 ? 0: i + 1;

            console.log('begin Index = ' + beginIndex);

            for (let j = 0; j < wordLen; j++) {

                const isEnd = arr[i + j] !== " " && (arr[i + j + 1] === " ");

                const isEnd2 = (i + j + 1) === arr.length - 1;


                // console.log('isEnd = ' + isEnd);
                // console.log('arr[i + j] = ' + arr[i + j]);
                // console.log('arr[i + j + 1] = ' + arr[i + j + 1]);
                // console.log('wl = ' + wordLen);

                if (isEnd2) {
                    console.log('END ARR');
                    console.log('LAST INDEX = ' + (i + j + 1));

                    endIndex = i + j + 1 === (arr.length - 1) ? i + j : i + j + 1;

                    break;

                } else if (isEnd) {
                    console.log("word len = " + wordLen);

                    i += wordLen - 1;

                    endIndex = i;
                    console.log('end Index = ' + endIndex);
                    break;

                } else {
                    wordLen += 1;
                }

            }

            reverseArr(beginIndex, endIndex);
        }

    }



}


// console.log(spacedReverse(spaceArr1));
console.log(spacedReverse(spaceArr2));
// console.log(spacedReverse(spaceArr3));
