function add(num1: number, num2: number, showResult: boolean, string: string) {
  !showResult
    ? `${string} ${num1 + num2}`
    : console.log(`${string} ${num1 + num2}`);
}

let number1 = 3;
const number2 = 4.5;
const printResult = true;
const resultString = "Result is ";

add(number1, number2, printResult, resultString);
