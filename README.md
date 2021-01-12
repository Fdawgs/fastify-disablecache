# fastify-disablecache

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/fastify-disablecache.svg)](https://github.com/Fdawgs/fastify-disablecache/releases/latest/) [![npm version](https://img.shields.io/npm/v/fastify-disablecache)](https://www.npmjs.com/package/fastify-disablecache) ![Build Status](https://github.com/Fdawgs/fastify-disablecache/workflows/CI/badge.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/fastify-disablecache/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/fastify-disablecache?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/fastify-disablecache/badge.svg)](https://snyk.io/test/github/Fdawgs/fastify-disablecache) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> Fastify plugin to disable client-side caching

## Intro

The fastify-disablecache plugin was created out of a need for an easy way for client-side caching to be disabled for backend APIs at [Yeovil District Hospital NHS Foundation Trust](https://yeovilhospital.co.uk/), to ensure patient data is always current when called by applications.

This plugin, inspired by [nocache](https://github.com/helmetjs/nocache), sets the following response headers and values:

```
Surrogate-Control: no-store
Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
Pragma: no-cache
Expires: 0
```

You can read more about these response headers on [MDN here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#caching).

## Installation

Install using [`yarn`](https://yarnpkg.com/en/package/fastify-disablecache):

```bash
yarn add fastify-disablecache
```

Or [`npm`](https://www.npmjs.com/package/fastify-disablecache):

```bash
npm install fastify-disablecache
```

fastify-disablecache's test scripts use yarn commands.

## Example usage

```js
const Fastify = require("fastify");
const disableCache = require("fastify-disablecache");

const server = Fastify();
server.register(disableCache);

server.get("/", (req, res) => {
	res.send("ok");
});

server.listen(3000);
```

## Contributing

Please see [CONTRIBUTING.md](https://github.com/Fdawgs/fastify-disablecache/blob/master/CONTRIBUTING.md) for more details regarding contributing to this project.

## Acknowledgements

-   [**Evan Hahn**](https://github.com/EvanHahn) - [nocache](https://github.com/helmetjs/helmet) developer
-   [**Matteo Collina**](https://github.com/mcollina) - Optimisation suggestions

## License

`fastify-disablecache` is licensed under the [MIT](https://github.com/Fdawgs/fastify-disablecache/blob/master/LICENSE) license.
