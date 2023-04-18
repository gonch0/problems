var sort1 = function (nums) {

    var merge = function (arr, L, M, R) {
        var left = arr.slice(L, M + 1);
        var right = arr.slice(M + 1, R + 1);

        var i = L;
        var j = 0;
        var k = 0;

        while (j < left.length && k < right.length) {
            if (left[j] <= right[k]) {
                arr[i] = left[j];
                j++;
            } else {
                arr[i] = right[k];
                k++;
            }
            i++;
        }

        while (j < left.length) {
            nums[i] = left[j];
            j++;
            i++;
        }
        while (k < right.length) {
            nums[i] = right[k];
            k++;
            i++;
        }
    };

    var mergeSort = function (arr, l, r) {
        if (l === r) {
            return arr;
        }

        var m = Math.floor(0.5 * (l + r));

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
        return arr;
    };

    return mergeSort(nums, 0, nums.length - 1);
};

console.log(sort1([
    5,
    2,
    3,
    1,
]));