import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __currentFileName = fileURLToPath(import.meta.url);
  const __currentDirName = path.dirname(__currentFileName);
  const newFilePath = path.join(__currentDirName, "files", "fresh.txt");

  try {
    await fs.writeFile(newFilePath, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
