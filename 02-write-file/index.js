const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const {stdin, stdout, exit} = process;

stdout.write('write text\n' + 'Ctrl + C for Exit\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    exit();
  } else {
    writeStream.write(data.toString());
  }
});

process.on('exit', () => {
  stdout.write('exit');
});
process.on('SIGINT', exit);