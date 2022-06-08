# prettier-pipe

Use prettier on the command line via a pipe.

## Setup

_TODO: Improve this_

1. Clone the repo
2. Open ./bin/prettier-pipe and update path to where you cloned your repo
3. `ln ./bin/prettier-pipe /usr/local/bin/prettier-pipe`

## Usage

**Basic**

```sh
cat index.js | prettier-pipe
```

This will use `babel` as the default parser. If you wish to use the correct parser for your filetype, you must pass the filename/path as the first argument.

**Complete**

```sh
cat index.js | prettier-pipe index.js
```
