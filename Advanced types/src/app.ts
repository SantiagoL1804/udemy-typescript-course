//! INTERSECTION TYPES

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

const Santiago: ElevatedEmployee = {
  name: "Santiago",
  privileges: ["Admin"],
  startDate: new Date(),
};

type UnknownEmployee = Admin | Employee;

//! TYPE GUARDS

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log(`Name:${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
};

printEmployeeInfo(Santiago);

//! DISCRIMINATED TYPES

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      return;
  }
  console.log(`Moving at speed ${speed}`);
}

moveAnimal({ type: "horse", runningSpeed: 20 });

//! TYPE CASTING

// const inputElement = <HTMLInputElement>document.getElementById("input")!;
const inputElement = document.getElementById("input")! as HTMLInputElement;

inputElement.value = "Hola";

//! INDEX PROTERTIES

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  username: "Not a valid username",
  email: "Not a valid email",
};

//! FUNCTION OVERLOADS

type Combinable = number | string;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const sum = add(1, 2);
sum.toFixed(2);

//! OPTIONAL CHAINING

const fetchedUserData = {
  id: "123",
  name: "Santiago",
  job: { title: "Programmer", description: "I work at 369" },
};

console.log(fetchedUserData?.job?.description);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
