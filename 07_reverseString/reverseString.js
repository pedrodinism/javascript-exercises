const reverseString = function(str) {
    let l = str.length
    let result = ''
    for (let i = l - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
