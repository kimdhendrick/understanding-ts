// const ADMIN = 0
// const READ_ONLY = 1

enum Role {
  ADMIN,
  READ_ONLY = 100,
  AUTHOR = "author",
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  //   role: [number, string]; // Tuple
  role: Role;
} = {
  name: "Kim",
  age: 52,
  hobbies: ["sports", "cooking"],
  //   role: [2, "admin"],
  role: Role.ADMIN,
};

// person.role.push("admin");
console.log(person.role);
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
