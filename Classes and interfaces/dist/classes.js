"use strict";
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
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        // private id: string;
        this.employees = [];
        // this.name = n;
        //this.id = id;
        // this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department ID: ${this.id}, ${this.name}`);
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
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
    addEmployee(employee) {
        if (employee === "vaco")
            return;
        this.employees.push(employee);
    }
    addReport(text) {
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
