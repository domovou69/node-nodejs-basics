import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "path";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const gzip = createGzip();
  const source = createReadStream(
    path.resolve(__dirname, "files", "fileToCompress.txt")
  );
  const destination = createWriteStream(
    path.resolve(__dirname, "files", "archive.gz")
  );

  pipeline(source, gzip, destination);
};

await compress();
