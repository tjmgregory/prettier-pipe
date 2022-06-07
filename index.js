#!/usr/bin/env node
const prettier = require("prettier");
const fs = require("fs");

// Read from stdin
const data = fs.readFileSync(process.stdin.fd, "utf-8");

// Grab the filename that was ideally provided, which will allow pretter to
// infer the correct parser
const filepath = process.argv[1];
const prettierConfigDefault = filepath ? { filepath } : { parser: "babel" };

// Find your nearest prettier config
prettier.resolveConfig(process.cwd()).then((config) => {
  // Format
  const formatted = prettier.format(data, {
    ...prettierConfigDefault,
    ...config,
  });

  // This instead of log to avoid the newline
  fs.writeFileSync(process.stdout.fd, formatted);
});
