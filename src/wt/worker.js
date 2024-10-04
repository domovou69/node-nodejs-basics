import { Worker, isMainThread, parentPort } from "node:worker_threads";
import { fileURLToPath } from "node:url";
// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (isMainThread) {
    const worker = new Worker(fileURLToPath(import.meta.url));
    worker.on("message", (message) => {
      console.log(`Fibonacci result: ${message}`);
    });
    worker.postMessage("15");
  } else {
    parentPort.on("message", (mainThreadMsg) => {
      const result = nthFibonacci(mainThreadMsg);
      parentPort.postMessage(result);
    });
  }
};

sendResult();
