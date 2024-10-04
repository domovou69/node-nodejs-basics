import { mkdir, opendir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const list = async () => {
  const curFilePath = fileURLToPath(import.meta.url);
  const curFolder = path.dirname(curFilePath);
  const fromFilePath = path.join(curFolder, "files");

  if (!existsSync(fromFilePath)) {
    throw new Error("FS operation failed");
  }

  const dir = await opendir(fromFilePath);
  let allFileNamesArr = [];
  for await (const dirent of dir) {
    allFileNamesArr.push(dirent.name);
  }
  console.log(allFileNamesArr);
};

await list();
