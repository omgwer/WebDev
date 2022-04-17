function isPrimeNumber(number) {
    let isPrime;

    isPrime = true;
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            return false;
        }
    }
    return true;
}

function isPrimeNumberArr(numberArr) {
    if (Array.isArray(numberArr)) {
        for (let i = 0; i < numberArr.length; i++) {
            if (validateNumber(numberArr[i])) {
                if (isPrimeNumber(numberArr[i])) {
                    console.log(numberArr[i] + " is prime");
                } else {
                    console.log(numberArr[i] + " is not prime");
                }
            }
        }
    } else {
        if (validateNumber(numberArr)) {
            if (isPrimeNumber(numberArr)) {
                console.log(numberArr + " is prime");
            } else {
                console.log(numberArr + " is not prime");
            }
        } else {
            console.log(numberArr + "Не массив и не число");
        }
    }
}

function validateNumber(number) {
    if (typeof number === "number") {
        if (number > 0) {
            if (Number.isInteger(number)) {
                return true;
            } else {
                console.log(number + "Дробное");
                return false;
            }
        } else {
            console.log(number + "Меньше или равен нулю");
            return false;
        }
    } else {
        console.log(number + "Не число");
        return false;
    }
}

