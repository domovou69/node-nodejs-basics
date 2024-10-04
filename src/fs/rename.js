import { existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { rename as renamefs } from "fs";

const rename = async () => {
  const curFilePath = fileURLToPath(import.meta.url);
  const curFolder = path.dirname(curFilePath);
  const fromFilePath = path.join(curFolder, "files");

  const wrongName = "wrongFilename.txt";
  const correctName = "properFilename.md";

  const wrongFileNamePath = path.join(fromFilePath, wrongName);
  console.log(wrongFileNamePath);
  const correctFileNamePath = path.join(fromFilePath, correctName);
  console.log(correctFileNamePath);

  if (!existsSync(wrongFileNamePath) || existsSync(correctFileNamePath)) {
    throw new Error("FS operation failed");
  }

  renamefs(wrongFileNamePath, correctFileNamePath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await rename();
