"use strict";

const fp = require("fastify-plugin");

const CACHE_HEADERS = {
	"Cache-Control": "no-store, max-age=0, must-revalidate",
	Expires: "0",
	Pragma: "no-cache",
	"Surrogate-Control": "no-store",
};

/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to disable client-side caching
 * by setting the relevant response headers.
 * @type {import("fastify").FastifyPluginCallback}
 */
function fastifyDisablecache(server, _options, done) {
	server.addHook("onRequest", (_req, res, next) => {
		res.headers(CACHE_HEADERS);
		next();
	});
	done();
}

module.exports = fp(fastifyDisablecache, {
	fastify: "5.x",
	name: "fastify-disablecache",
}); // CommonJS export
module.exports.default = fastifyDisablecache; // ESM default export
module.exports.fastifyDisablecache = fastifyDisablecache; // TypeScript and named export
