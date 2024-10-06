import { existsSync, unlink } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const remove = async () => {
  const curFilePath = fileURLToPath(import.meta.url);
  const curFolder = path.dirname(curFilePath);
  const fromFilePath = path.join(curFolder, "files");

  const fileName = "fileToRemove.txt";
  const fileNamePath = path.join(fromFilePath, fileName);

  if (!existsSync(fileNamePath)) {
    throw new Error("FS operation failed");
  }

  unlink(fileNamePath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
