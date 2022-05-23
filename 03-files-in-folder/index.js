const fs = require('fs/promises');
const path = require('path');

// const readline = require('readline');
// const {stdin, stdout, exit} = process;

const folder = path.join(__dirname, 'secret-folder');

async function outFiles() {
  const files = await fs.readdir(folder, {withFileTypes: true});
  for (let file of files) {
    if (file.isFile()) {
      const arrayFiles = file.name.split('.'),
        fileSize = (await fs.stat(path.resolve(__dirname, 'secret-folder', file.name))).size;
      console.log(`${arrayFiles[0]} \t-\t ${arrayFiles[1]} \t-\t ${fileSize}\tb`);
    }
  } 
}
outFiles();
