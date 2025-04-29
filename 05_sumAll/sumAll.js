const sumAll = function(num1, num2) {
    
    if(num1<0||num2<0||!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
    let lowerNumber = 0
    let higherNumber = 0

    if (num1<=num2) {
        lowerNumber = num1
        higherNumber = num2
    }else {
        lowerNumber = num2
        higherNumber = num1
    }

    let sum = 0
    for(let i=lowerNumber;i<=higherNumber;i++){
        sum+=i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
