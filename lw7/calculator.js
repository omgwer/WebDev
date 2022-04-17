/* Функция рекурсивно вычисляет арифметическое выражение
*  @string - строка арифметического выражения в польской записи
*  @return - Число, результат вычисления выражения. 
*/
function calc(string) {
  return getOperationResult(validateOperation(string[0]),getFirstOperand(string), getSecondOperand(string)); 
}

/*
* Функция проверяет валидность числа
*/
function validateNumber(number) {
  if (typeof number === 'number') {
    if (Number.isInteger(number)) {
      return true;
    } else {
      console.log(number + 'Дробное');
      return false;
    }
  } else {
    console.log(number + 'Не число');
    return false;
  }
}

/*
* Функция проверяет начилие операции для операндов
* @return - true or false
*/
function validateOperation(operation) {
  return !(operation == '+' || operation == '-' || operation == '*' || operation == '/') ? 'error' : operation;
}

/* 
* Возвращает индекс последней закрывающей скобки в группе скобок
* @return - Int
*/
function getLastIndexOperand(string) {
  exitIndex = 0;
  for (let i = indexOfStart; i < string.length; i++) {
    if (string[i] == '(') {
      exitIndex++;
    }
    if (string[i] == ')') {
      exitIndex--;
    }
    if (exitIndex == 0) {
      return i;
    }
  }
  return -1;
}

/*
* Функция возвращает результат вычислений, если операнды или операция не валидны, возвращается ошибка.
* @return - Целое число
*/
function getOperationResult(operation, firstOperand, secondOperand)
{
    if (operation != 'error' && validateNumber(firstOperand) || validateNumber(secondOperand)) {
        switch (operation) {
          case '+':
            return firstOperand + secondOperand;
            break;
          case '-':
            return firstOperand - secondOperand;
            break;
          case '*':
            return firstOperand * secondOperand;
            break;
          case '/':
            return firstOperand / secondOperand;
            break;
        }
      } else {
          return 'Error!';
      }
}

/*
* Функция возвращает первый операнд
*/
function getFirstOperand(string)
{
    firstOperand = 0;
    indexOfStart = 1; 
    if (string[indexOfStart] == '(') {
        newString = string.slice(indexOfStart + 1, getLastIndexOperand(string));
        firstOperand = calc(newString);
      } else {
        firstOperand = Number(
          string.slice(indexOfStart + 1, string.lastIndexOf(' '))
        );
      }
    return firstOperand;
}

/*
* Функция возвращает второй операнд
*/
function getSecondOperand(string) 
{
    secondOperand = 0;
    if (getLastIndexOperand(string) < string.lastIndexOf('(')) {
        newString = string.slice(getLastIndexOperand(string) + 1);
        newString = newString.slice(indexOfStart + 1, getLastIndexOperand(newString));
        secondOperand = calc(newString);      
      } else 
      {
        secondOperand = Number(string.slice(string.lastIndexOf(' '), string.length));
      }
    return secondOperand;
}

let testString = '+(-(+(- 1243 233) 22) 3) (* 55 25)';
console.log(calc(testString));