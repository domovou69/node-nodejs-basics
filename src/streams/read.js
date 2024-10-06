import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const read = async () => {
  const pathToDestinationFile = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRead.txt"
  );

  const streamInput = createReadStream(pathToDestinationFile);

  streamInput.on("data", (data) => {
    process.stdout.write(data);
  });
};

await read();
