function add(num1: number, num2: number) {
  return num1 + num2;
}

function printResult(num: number): void {
  console.log("Result is:" + num);
}
printResult(add(30, 20));

let combineValues: (a: number, b: number) => number;

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

console.log(
  addAndHandle(30, 10, (result) => {
    console.log(result);
  })
);

combineValues = add;
