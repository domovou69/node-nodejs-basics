import { mkdir, opendir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const copy = async () => {
  const curFilePath = fileURLToPath(import.meta.url);
  const curFolder = path.dirname(curFilePath);
  const fromFilePath = path.join(curFolder, "files");
  const toFilePath = path.join(curFolder, "files_copy");

  if (!existsSync(fromFilePath) || existsSync(toFilePath)) {
    throw new Error("FS operation failed");
  }

  await mkdir(toFilePath, { recursive: true });

  try {
    const dir = await opendir(fromFilePath);
    for await (const dirent of dir) {
      const sourceFile = path.join(fromFilePath, dirent.name);
      const destinationFile = path.join(toFilePath, dirent.name);

      await copyFile(sourceFile, destinationFile);
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
