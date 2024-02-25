interface person {
  firstName: string;
  age: number;
  hobbies: Array<string | undefined>;
  role: number;
}

// const ADMIN = 0;
// const AUTHOR = 1;
// const READ_ONLY = 2;

enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

// const person: person = {
//   firstName: "Santiago",
//   age: 27,
//   hobbies: ["Pescar", "Nadar"],
//   role: [2, "autor"],
// };

const person: person = {
  firstName: "Santiago",
  age: 27,
  hobbies: ["Pescar", "Nadar"],
  role: Role.ADMIN,
};

//person.role.push(2); // push es la unica manera de agregar un valor a un tuple
if (person.role === Role.ADMIN) console.log(person.role);
