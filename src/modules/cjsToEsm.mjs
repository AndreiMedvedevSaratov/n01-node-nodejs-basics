import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";

import "./files/c.js";

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(__filename);

let unknownObject;

random > 0.5
    ? unknownObject = require('./files/a.json')
    : unknownObject = require('./files/b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };
