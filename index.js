#!/usr/bin/env node
const prettier = require("prettier");
const fs = require("fs");

const data = fs.readFileSync(process.stdin.fd, "utf-8");

console.log(prettier.format(data, { semi: false, parser: "babel" }));
