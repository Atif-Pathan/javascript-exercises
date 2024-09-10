const reverseString = function(string) {
    let rev = "";
    for (let index = string.length - 1; index >= 0; index--) {
        rev += string[index];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
