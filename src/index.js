
exports.min = function min (array) {
    return checkArray(array)
        ? array.sort(sort)[0]
        : false;
};

exports.max = function max (array) {
    return checkArray(array)
        ? array.sort(sort)[array.length - 1]
        : false;
};

exports.avg = function avg (array) {
    return checkArray(array)
        ? array.reduce((accum, current) => accum + current, 0) / array.length
        : false;
};

function checkArray(array) {
    return !(!Array.isArray(array) || !array.length);
}

function sort (a, b) {
 return a - b;
}
