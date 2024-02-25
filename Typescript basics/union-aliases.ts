type Combinable = number | string;
type ConversionType = "to-number" | "to-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionType
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "to-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(20, 25, "to-string");
console.log(combineAges);

const combineAges2 = combine("hola", "chau", "to-string");
console.log(combineAges2);
