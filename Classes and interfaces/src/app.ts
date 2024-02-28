type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
  name: "Santi",
  privileges: ["Delete users"],
  startDate: new Date(),
};

// type AddFn = (n1: number, n2: number) => number;

interface AddFn {
  (n1: number, n2: number): number;
}

let addFn: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  public age: number = 28;
  name?: string;

  constructor(public n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log(`Holis`);
    }
  }
}

let person1 = new Person();

person1.greet("Holis, me llamo");
console.log(person1);
