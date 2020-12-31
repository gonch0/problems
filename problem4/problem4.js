


const matrix1 = [
    [1, 2],
    [3, 4],
];

// [1, 2, 4, 3];

const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];

const matrix3 = [
    [undefined, '', null],
    [true, false, 'foo'],
    [[], {}, { key: 'bar' }],
];

// [undefined, '', null, 'foo', { key: 'bar' }, {}, [], true, false];


const matrix4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];


const matrix5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

// [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8];


// import _ from 'lodash';

// var _ = require('lodash');

const rotate = (matrix) => _.reverse(_.zip(...matrix));

const buildSnailPath = (matrix) => {
    if (matrix.length === 0) {
        return [];
    }
    const [head, ...tail] = matrix;
    return [head, buildSnailPath(rotate(tail))].flat();
};


console.log(buildSnailPath(matrix1));
console.log(buildSnailPath(matrix2));
console.log(buildSnailPath(matrix3));
console.log(buildSnailPath(matrix4));
console.log(buildSnailPath(matrix5));