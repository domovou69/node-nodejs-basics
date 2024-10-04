import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const write = async () => {
  const pathToDestinationFile = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToWrite.txt"
  );

  const streamWrite = createWriteStream(pathToDestinationFile);

  process.stdin.pipe(streamWrite);
};

await write();
