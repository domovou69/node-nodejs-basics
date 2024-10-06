import { Transform } from "stream";

const transform = async () => {
  const reverseStringTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(reverseStringTransform).pipe(process.stdout);
};

await transform();
