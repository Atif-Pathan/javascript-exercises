const removeFromArray = function(array, ...args) {
    const argArray = [...args];
    const removedArray = array.filter(removeAllFromArray);

    function removeAllFromArray(arg) {
        if (!argArray.includes(arg)){
            return arg;
        }
    }
    return removedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
