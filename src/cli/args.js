const parseArgs = () => {
  const args = process.argv;

  args.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      const value = args[index + 1];
      if (value && !value.startsWith("--")) {
        console.log(`${arg.slice(2)} is ${value}`);
      }
    }
  });
};

parseArgs();
