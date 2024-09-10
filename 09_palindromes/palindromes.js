const palindromes = function (string) {
    const pali = string.toLowerCase().replace(/[! "#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').split('');
    left = 0;
    right = pali.length - 1;
    while (left <= right) {
        if (pali[left] !== pali[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
