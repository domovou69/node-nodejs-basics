import { existsSync, readFile } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const read = async () => {
  const curFilePath = fileURLToPath(import.meta.url);
  const curFolder = path.dirname(curFilePath);
  const fromFilePath = path.join(curFolder, "files");
  const fileToRead = "fileToRead.txt";
  const pathToDestinationFile = path.join(fromFilePath, fileToRead);

  if (!existsSync(pathToDestinationFile)) {
    throw new Error("FS operation failed");
  }

  readFile(pathToDestinationFile, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

await read();
