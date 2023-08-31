import "./bg.css";
let title = require("./title.txt");
console.log(title);

let content = require("./content.txt");
console.log(content.default);

console.log("process.env.NODE_ENV", process.env.NODE_ENV); // development
console.log("NODE_ENV", NODE_ENV); // production
