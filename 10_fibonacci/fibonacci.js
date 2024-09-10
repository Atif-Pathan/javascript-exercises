const fibonacci = function(number) {
    if (!Number.isInteger(number)) {
        number = parseInt(number);
    }

    if (number < 0) {
        return "OOPS";
    }
    else if (number > 0 && number < 3) {
        return 1;
    }
    else if (number === 0) {
        return 0;
    }

    let f0 = 1;
    let f1 = 1;
    let fCurrent;
    for (let index = 1; index < number - 1; index++) {
        fCurrent = f0 + f1;
        f0 = f1;
        f1 = fCurrent;
    }
    return fCurrent;

};

// Do not edit below this line
module.exports = fibonacci;
