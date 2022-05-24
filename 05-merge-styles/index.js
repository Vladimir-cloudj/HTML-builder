const path = require('path');
const fs = require('fs');

const styleSrc = path.resolve(__dirname, 'styles');
const projectDist = path.resolve(__dirname, 'project-dist', 'bundle.css');

async function mergeCSS() {
  let files = await fs.promises.readdir(styleSrc, {withFileTypes:true});
  const writeStream = fs.createWriteStream(projectDist);
  for (let file of files){
    if (file.isFile() && file.name.split('.')[1] === 'css'){
      let fileSource = path.resolve(styleSrc, file.name);
      let readStream = fs.createReadStream(fileSource);
      readStream.pipe(writeStream);
    }
  }
}
mergeCSS();