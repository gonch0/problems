
const sum = function(arr) {

    if (arr.length <= 1) {
        return arr[0];
    }

    return arr[0] + sum(arr.slice(1,arr.length))


};


console.log(sum([2, 4, 6, 8, 9]));
