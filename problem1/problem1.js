const jack = {
    a: 'jack',
    b: {
        c: 'sparrow',
        d: {
            e: 'hahaha'
        }
    }
};


const jack2 = {
    "lvl1_a": "1",
    "lvl1_b": {
        "lvl2_a": "2",
        "lvl2_b": {
            "lvl3_a": "3",
            "lvl3_b": "4",
            "lvl3_c": {
                "": "5",
            },
        }
    }
};

let res = {};

function flatten(assoc, fullKey = null) {

    for (let [key, value] of Object.entries(assoc)) {

        if (fullKey) {
            if (key === "") {
                key = fullKey;
            } else {
                key = fullKey + "." + key;
            }
        }

        if (typeof value !== 'object') {
            res[key] = value;

        } else {
            flatten(value, key);
        }
    }

    return res;

}


// console.log(flatten(jack));
console.log(flatten(jack2));