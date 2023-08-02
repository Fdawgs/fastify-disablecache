"use strict";

const fp = require("fastify-plugin");

/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to disable client-side caching
 * by setting the relevant response headers.
 * @param {import("fastify").FastifyInstance} server - Fastify instance.
 */
async function fastifyDisablecache(server) {
	server.addHook("onRequest", async (_req, res) => {
		res.headers({
			"Cache-Control": "no-store, max-age=0, must-revalidate",
			Expires: "0",
			Pragma: "no-cache",
			"Surrogate-Control": "no-store",
		});
	});
}

module.exports = fp(fastifyDisablecache, {
	fastify: "4.x",
	name: "fastify-disablecache",
});
module.exports.default = fastifyDisablecache;
module.exports.fastifyDisablecache = fastifyDisablecache;
