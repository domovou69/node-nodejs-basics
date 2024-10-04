import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "path";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const ungzip = createGunzip();
  const source = createReadStream(
    path.resolve(__dirname, "files", "archive.gz")
  );
  const destination = createWriteStream(
    path.resolve(__dirname, "files", "fileToCompress.txt")
  );

  pipeline(source, ungzip, destination, (err) => {
    if (err) {
      console.error("An error occurred during decompression:", err);
      process.exitCode = 1;
    } else {
      console.log("File successfully decompressed.");
    }
  });
};

await decompress();
