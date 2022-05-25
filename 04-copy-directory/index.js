const path = require('path');
const fsPromises = require('fs').promises;

const dirOriginalPath = path.join(__dirname, 'files');
const dirCopyPath = path.join(__dirname, 'files-copy');



async function copyDir()  {
  await fsPromises.rm(dirCopyPath, { force: true, recursive: true });
	await fsPromises.mkdir(dirCopyPath, {recursive: true});

	let originalFiles = await fsPromises.readdir(dirOriginalPath);

	for (let file of originalFiles) {
		await fsPromises.copyFile(path.join(dirOriginalPath, file), path.join(dirCopyPath, file));
	}
}


copyDir();