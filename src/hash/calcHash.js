import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { stdout } from "node:process";
import { fileURLToPath } from "url";
import path from "path";

const calculateHash = async () => {
  const hash = createHash("sha256");

  const pathToDestinationFile = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToCalculateHashFor.txt"
  );

  const input = createReadStream(pathToDestinationFile);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
