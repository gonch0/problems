function compress(list) {
    list.sort(function(a, b) {
        return a - b;
    });
    var n = list.length;
    var intervals = [];
    var s = 0;

    while (s < n - 1) {
        var i = s + 1;

        while (i < n && list[i] === list[i - 1] + 1) { i++; }
        // now `s` points to either a start of the next interval, or equals to `n` and exceeds `list` boundaries

        var interval;
        if (i - s === 1) {
            interval = list[s];
        } else {
            interval = list[s] + '-' + list[i - 1];
        }
        intervals.push(interval);
        s = i;
    }
    if (s < n) {
        intervals.push(list[n - 1]);
    }

    return intervals.join(',');
}

console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]));
console.log(compress([0]));
console.log(compress([1,3,5]));


