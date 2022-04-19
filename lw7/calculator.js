let testString = '+(-(+(/ 1243 2) 22) 3) (* 55 25)';
console.log(calc(testString));

function calc(string) {
    return getOperationResult(validateOperation(string[0]), getFirstOperand(string), getSecondOperand(string));
}

function validateNumber(number) {
    if (typeof number === 'number') {
        if (Number.isInteger(number)) {
            return true;
        } else {
            return true;
        }
    } else {
        console.log(number + 'Не число');
        return false;
    }
}

function validateOperation(operation) {
    return !(operation === '+' || operation === '-' || operation === '*' || operation === '/') ? 'error' : operation;
}

function getLastIndexOperand(string) {
    let exitIndex = 0;
    let indexOfStart = 1;
    for (let i = indexOfStart; i < string.length; i++) {
        if (string[i] === '(') {
            exitIndex++;
        }
        if (string[i] === ')') {
            exitIndex--;
        }
        if (exitIndex === 0) {
            return i;
        }
    }
    return -1;
}

function getOperationResult(operation, firstOperand, secondOperand) {
    if (operation !== 'error' && validateNumber(firstOperand) && validateNumber(secondOperand)) {
        switch (operation) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return (secondOperand === 0) ? "Error, division by zero!" : firstOperand / secondOperand;
        }
    } else {
        return 'Error!';
    }
}

function getFirstOperand(string) {
    let indexOfStart = 1;
    if (string[indexOfStart] === '(') {
        let newString = string.slice(indexOfStart + 1, getLastIndexOperand(string));
        return calc(newString);
    } else {
        return Number(
            string.slice(indexOfStart + 1, string.lastIndexOf(' '))
        );
    }
}

function getSecondOperand(string) {
    let indexOfStart = 1;
    if (getLastIndexOperand(string) < string.lastIndexOf('(')) {
        let newString = string.slice(getLastIndexOperand(string) + 1);
        newString = newString.slice(indexOfStart + 1, getLastIndexOperand(newString));
        return calc(newString);
    } else {
        return Number(string.slice(string.lastIndexOf(' '), string.length));
    }
}
