import { fileURLToPath } from "url";
import path from "path";
import { spawn } from "child_process";
const spawnChildProcess = async (args) => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFileDir = path.dirname(currentFilePath);
  const childFilePath = path.resolve(currentFileDir, "files", "script.js");

  const child = spawn("node", [childFilePath, ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "3"]);
