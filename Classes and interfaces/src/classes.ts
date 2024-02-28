// class ProjectInput {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;

//   constructor() {
//     this.templateElement = document.getElementById(
//       "project-input"
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById("app")! as HTMLDivElement;
//   }
// }

abstract class Department {
  static fiscalYear = 2024;
  // private name: string;
  // private id: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    //this.id = id;
    // this.employees = [];
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department ID: ${this.id}, ${this.name}`);
  }
}

class Accounting extends Department {
  static instance: Accounting;

  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
  }

  static getInstance() {
    if (Accounting.instance) {
      return this.instance;
    }
    this.instance = new Accounting("1234", []);
    return this.instance;
  }

  describe() {
    console.log(`IT Department ID: ${this.id}`);
  }

  addEmployee(employee: string) {
    if (employee === "vaco") return;

    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment("123", ["Toto", "Maluma"]);

IT.addEmployee("Pepe");
IT.addEmployee("Rocco");

// IT.employees[2] = "Yostin";

IT.describe();
IT.printEmployees();

// const accounting = Accounting("1234", ["Cerrar caja"]);
const accounting = Accounting.getInstance();

accounting.addReport("Realizar conciliacion");

accounting.printReports();

accounting.addEmployee("vacoloco");

accounting.printEmployees();

const employee1 = Department.createEmployee("santuli");
console.log(employee1, Department.fiscalYear);

console.log(IT.describe());

// const accountingCopy = { name: "asdas", describe: accounting.describe };

// accountingCopy.describe();
