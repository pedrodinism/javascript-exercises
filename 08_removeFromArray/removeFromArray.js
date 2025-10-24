const removeFromArray = function(array, ...args) {
    const toRemove = new Set(args)
    return array.filter(item => !toRemove.has(item));
}
// Do not edit below this line
module.exports = removeFromArray;
