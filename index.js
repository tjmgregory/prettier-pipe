#!/usr/bin/env node
const prettier = require("prettier");
const fs = require("fs");

// Read from stdin
const data = fs.readFileSync(process.stdin.fd, "utf-8");

// Format
const formatted = prettier.format(data, { semi: false, parser: "babel" });

// This instead of log to avoid the newline
fs.writeFileSync(process.stdout.fd, data);
