function Logger(logString: string) {
  console.log("LOGGER");

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("WITH TEMPLATE");

  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      const p = new constructor();
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }

    console.log(constructor);
  };
}
@Logger("LOGGING")
@WithTemplate("<h1>LOGGING PERSON</h1>", "hookEl")
class Person {
  name = "Santiago";
  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);
