"use strict";

const fp = require("fastify-plugin");

/** @type {Readonly<Record<string, string>>} */
const CACHE_HEADERS = Object.freeze({
	"cache-control": "no-store, max-age=0, must-revalidate",
	expires: "0",
	pragma: "no-cache",
	"surrogate-control": "no-store",
});

/**
 * @author Frazer Smith
 * @description Adds cache disabling headers to the response.
 * @type {import("fastify").onRequestHookHandler}
 */
function setCacheHeaders(_req, res, done) {
	res.headers(CACHE_HEADERS);
	done();
}

/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to disable client-side caching
 * by setting the relevant response headers.
 * @type {import("fastify").FastifyPluginCallback}
 */
function fastifyDisablecache(server, _options, done) {
	server.addHook("onRequest", setCacheHeaders);
	done();
}

module.exports = fp(fastifyDisablecache, {
	fastify: "5.x",
	name: "fastify-disablecache",
}); // CommonJS export
module.exports.default = fastifyDisablecache; // ESM default export
module.exports.fastifyDisablecache = fastifyDisablecache; // TypeScript and named export
