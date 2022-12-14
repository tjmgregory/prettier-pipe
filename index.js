#!/usr/bin/env node
const prettier = require("prettier");
const fs = require("fs");

// Read from stdin
const data = fs.readFileSync(process.stdin.fd, "utf-8");

// Grab the filename that was ideally provided, which will allow pretter to
// infer the correct parser. Default to tsx as that at least covers js,jsx,ts,tsx
const filepath = process.argv[2];
const prettierConfigDefault = filepath ? { filepath } : { filepath: 'foo.tsx' };

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
