// import * as fs from 'fs/promises';
// import * as fs from 'node:fs';

const fs = require("fs");
const path = require("path");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
// path.join("/01-read-file", "text.txt")
// fs.readFile("/01-read-file/text.txt", (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data.toString());
// });

fs.createReadStream(path.join(__dirname , "text.txt")).on('data', data => {
  console.log(data.toString());
});
fs.createReadStream(path.join(__dirname , "text.txt")).on('error', error => {
  console.log(error.message);
});
