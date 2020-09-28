
exports.min = function min (array) {
    if (!Array.isArray(array) || !array.length) return 0;

    const sortArray = array.sort((a, b) => a > b ? 1: -1);
    return sortArray[0];
};

exports.max = function max (array) {
    if (!Array.isArray(array) || !array.length) return 0;

    const sortArray = array.sort((a, b) => a > b ? 1: -1);
    return sortArray[sortArray.length - 1];
};

exports.avg = function avg (array) {
    if (!Array.isArray(array) || !array.length) return 0;

    const reducer = array.reduce((accum, current) => accum + current, 0);

    return reducer / array.length;

};
