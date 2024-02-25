function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result is:" + num);
}
printResult(add(30, 20));
var combineValues;
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
console.log(addAndHandle(30, 20, function (result) {
    console.log(result);
}));
combineValues = add;
