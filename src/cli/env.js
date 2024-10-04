const parseEnv = () => {
  process.env.RSS_stable = "QA";
  process.env.RSS_develop = "DEV";

  const envVars = process.env;
  const rssVars = Object.entries(envVars).filter(([key]) =>
    key.startsWith("RSS_")
  );
  const formattedVars = rssVars
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(formattedVars);
};

parseEnv();
