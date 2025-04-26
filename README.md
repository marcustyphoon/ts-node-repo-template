Experimental repo template for coding Node scripts in pure typescript esm.

Uses pnpm, eslint@9, typescript-eslint, and prettier.

This is set up to run scripts using `node --experimental-transform-types` in Node.js ≥22.6 (see https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/#the---erasablesyntaxonly-option), but using a loader like [tsx](https://github.com/privatenumber/tsx) may be more practical.

Note: due to [a bug in github-linguist](https://github.com/github-linguist/linguist/issues/7348), at the time of writing, directly executable typescript files with a node shebang are detected as javascript unless overridden in `.gitattributes`.

_This work is marked with [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)._
