import os from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  console.log(numCPUs);

  const pathToWorkerFile = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "worker.js"
  );

  let resArr = [];

  for (let i = 0; i < numCPUs; i++) {
    resArr.push(
      new Promise((resolve) => {
        const worker = new Worker(pathToWorkerFile);

        worker.on("message", (result) => {
          resolve({ status: "resolved", data: result });
        });

        worker.on("error", (err) => {
          resolve({ status: "error", data: null });
        });

        worker.postMessage(10 + i);
      })
    );
  }

  console.log(await Promise.all(resArr));
};

await performCalculations();
