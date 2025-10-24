const sumAll = function(a, b) {
    let higher = 0
    let lower = 0
    if (a === b || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR'
    }
    if (a > b) {
        higher = a
        lower = b
    }
    if (a < b) {
        higher = b
        lower = a
    }
    let result = higher
    for (i = higher - 1; i >= lower; i--)
    {
        result += i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
