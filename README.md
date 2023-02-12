# fastify-disablecache

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/fastify-disablecache.svg)](https://github.com/Fdawgs/fastify-disablecache/releases/latest/)
[![npm version](https://img.shields.io/npm/v/fastify-disablecache)](https://npmjs.com/package/fastify-disablecache)
![Build Status](https://github.com/Fdawgs/fastify-disablecache/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/fastify-disablecache/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/fastify-disablecache?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Fastify plugin to disable client-side caching

## Overview

Inspired by [nocache](https://github.com/helmetjs/nocache), the `fastify-disablecache` plugin sets the following response headers and values to disable client-side caching:

```
Cache-Control: no-store, max-age=0, must-revalidate
Expires: 0
Pragma: no-cache
Surrogate-Control: no-store
```

This plugin was created out of a need for an easy way to disable client-side caching for data received from backend APIs. This ensures data is always current when called by applications.

### Why These Headers?

-   `Cache-Control` - Primary response header for configuring cache controls [since HTTP/1.1](https://httpwg.org/specs/rfc7234.html#header.cache-control); whilst `no-store` is the directive to disable caching, clients such as [Internet Explorer](https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/connectivity-navigation/how-to-prevent-caching#the-cache-control-header) did not use it, thus the addition of `max-age=0, must-revalidate`
-   `Expires` - Included for backwards compatibility with [HTTP/1.0 caches](https://w3.org/Protocols/HTTP/1.0/spec.html#Expires)
-   `Pragma` - Included for backwards compatibility with [HTTP/1.0 caches](https://w3.org/Protocols/HTTP/1.0/spec.html#Pragma), was [used by Internet Explorer](https://docs.microsoft.com/en-us/troubleshoot/developer/browsers/connectivity-navigation/how-to-prevent-caching#the-pragma-no-cache-header)
-   `Surrogate-Control` - Not a standardised response header but is [used by CDNs and reverse proxies](https://w3.org/TR/edge-arch/) for cache control

## Installation

Install using `npm`:

```bash
npm i fastify-disablecache
```

For Fastify v3.x support, use `fastify-disablecache@2.0.8`.

## Example Usage

```js
const Fastify = require("fastify");
const disableCache = require("fastify-disablecache");

const server = Fastify();
server.register(disableCache);

server.get("/", (req, res) => {
	res.send("ok");
});

await server.listen({ port: 3000 });
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](./CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing.

## Acknowledgements

-   [**Evan Hahn**](https://github.com/EvanHahn) - [nocache](https://github.com/helmetjs/nocache) developer
-   [**Matteo Collina**](https://github.com/mcollina) - Optimisation suggestions

## License

`fastify-disablecache` is licensed under the [MIT](./LICENSE) license.
