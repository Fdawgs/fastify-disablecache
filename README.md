# fastify-disablecache

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/fastify-disablecache.svg)](https://github.com/Fdawgs/fastify-disablecache/releases/latest/)
[![npm version](https://img.shields.io/npm/v/fastify-disablecache)](https://www.npmjs.com/package/fastify-disablecache)
![Build Status](https://github.com/Fdawgs/fastify-disablecache/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/fastify-disablecache/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/fastify-disablecache?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/fastify-disablecache/badge.svg)](https://snyk.io/test/github/Fdawgs/fastify-disablecache)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Fastify plugin to disable client-side caching

## Intro

Inspired by [nocache](https://github.com/helmetjs/nocache), the `fastify-disablecache` plugin sets the following response headers and values to disable client-side caching:

```
Surrogate-Control: no-store
Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
Pragma: no-cache
Expires: 0
```

You can read more about these response headers on [MDN here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#caching).

This plugin was created out of a need for an easy way to disable client-side caching for data received from backend APIs at [Yeovil District Hospital NHS Foundation Trust](https://yeovilhospital.co.uk/). This ensures patient data is always current when called by applications.

## Installation

Install using [`npm`](https://www.npmjs.com/package/fastify-disablecache):

```bash
npm install fastify-disablecache
```

Or [`yarn`](https://yarnpkg.com/en/package/fastify-disablecache):

```bash
yarn add fastify-disablecache
```

fastify-disablecache's test scripts use npm commands.

## Example Usage

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

Contributions are welcome, and any help is greatly appreciated!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing.

## Acknowledgements

-   [**Evan Hahn**](https://github.com/EvanHahn) - [nocache](https://github.com/helmetjs/helmet) developer
-   [**Matteo Collina**](https://github.com/mcollina) - Optimisation suggestions

## License

`fastify-disablecache` is licensed under the [MIT](./LICENSE) license.
