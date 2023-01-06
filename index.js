// let app = require("./app");
// console.log(app.x);
// const fs = require("fs");
// fs.writeFileSync("created.txt", "THIS IS A GENERATED FILE FORM INDEX.JS FILE");
// const color = require("console-log-colors");
// console.log(color.red("This is colorful text"));
// console.log(color.blueBright("Rahul"));

//First Api

let http = require("http");
let data = require("./app");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application.json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(4500);
