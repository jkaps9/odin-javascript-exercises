const fibonacci = function (num) {

    if (num < 0) {
        return "OOPS"
    }

    //1, 1, 2, 3, 5, 8
    let fibArr = [0, 1]

    for (i = 2; i <= num; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
    }

    return fibArr[num]
};

// Do not edit below this line
module.exports = fibonacci;
