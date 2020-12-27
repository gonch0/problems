


const arr1 = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
];


const arr2 = [
    [' ', ' ', '*', ' ', ' '],
    [' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', '*', ' '],
    ['*', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', '*'],
    [' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', '*', ' '],
    [' ', ' ', '*', ' ', ' '],
];


const arr3 = [
    ['@', '@'],
    ['@', '|'],
    ['—', '|'],
    ['@', '|'],
    ['@', '@'],
];

const arr4 = [
    ['x'],
];



const duplicateValues = (items) => items.flatMap((item) => [item, item]);

const enlargeArrayImage = (items) => {
    const horizontallyStretched = items.map(duplicateValues);
    return duplicateValues(horizontallyStretched);
};

console.log(enlargeArrayImage(arr1));
console.log(enlargeArrayImage(arr2));
console.log(enlargeArrayImage(arr3));
console.log(enlargeArrayImage(arr4));