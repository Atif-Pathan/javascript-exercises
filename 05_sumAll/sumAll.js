const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }
    let sumAll = 0;
    end = Math.max(a,b);
    start = Math.min(a,b);
    for (let index = start; index < end + 1; index++) {
        sumAll += index;  
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
