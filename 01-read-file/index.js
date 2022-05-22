const fs = require('fs');
const path = require('path');

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
// path.join("/01-read-file", "text.txt")
// fs.readFile("/01-read-file/text.txt", (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data.toString());
// });

let Readstream = fs.createReadStream(path.join(__dirname, 'text.txt'));

// stream.on('data', data => {
//   console.log(data.toString());
// });
// stream.on('error', error => {
//   console.log(error.message);
// });

Readstream.on('data', (data, err) => {
  if (err) throw err.message;
  console.log(data.toString());
});