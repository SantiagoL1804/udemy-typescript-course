// const names: Array<string> = [];
// names[0];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(23);
//   }, 2000);
// });

// promise.then((res) => {
//   res.toFixed(2);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Santiago", hobbies: ["Sports"] }, { age: 28 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Object key: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Santiago", age: 28 }, "age"));

class DataStorage<T> {
  private data: T[] = [];

  addData(element: T) {
    this.data.push(element);
  }

  deleteElement(element: T) {
    this.data.splice(this.data.indexOf(element), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addData("Santiago");
textStorage.addData("Javier");

textStorage.deleteElement("Javier");

console.log(textStorage.getItems());

const numbersStorage = new DataStorage<number>();
numbersStorage.addData(23);
