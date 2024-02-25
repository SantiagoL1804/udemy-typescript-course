function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "to-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAges = combine(20, 25, "to-string");
console.log(combineAges);
var combineAges2 = combine("hola", "chau", "to-string");
console.log(combineAges2);
