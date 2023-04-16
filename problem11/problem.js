function compress1(list) {
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


function compress(list) {
    // your code here

    list.sort((a, b) => a - b);

    var res = [];
    var L = 0;
    var R = 0;


    while (R < list.length) {
        if (list[R] + 1 === list[R + 1]) {
            R++;
        } else {
            if (L === R) {
                res.push(String(list[L]));    
            } else {
                res.push(`${list[L]}-${list[R]}`);
            }

            R++;
            L = R;
        }
    }

    return res.join(',');

}

console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]));
console.log(compress([0]));
console.log(compress([1,3,5]));


