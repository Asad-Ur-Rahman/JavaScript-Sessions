// let user = {
//   name: "John",
//   age: 30
// }
// let user = {
//   name: "John",
//   age: 30,
//   "like birds": true
// }

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user["like birds"]);
// user["like birds"] = false
// console.log(user);

// let key = "like birds";
// console.log(user[key]);

// let x = {
//   0: "TEST",
//   for: 98,
//   return: "ytestt"
// }

// console.log(x[0]);
// console.log(x["0"]);

// for (const key in x) {
//   console.log(key);
//   console.log(x[key]);
// }

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

for (let code in codes) {
  console.log(code);
}