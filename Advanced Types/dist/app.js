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
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department("Accounting");
