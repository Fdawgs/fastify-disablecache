const fp = require("fastify-plugin");
/**
 * @author Frazer Smith
 * @description Simple plugin that adds an `onRequest` hook to disable client-side caching
 * by setting the relevant response headers.
 * @param {Function} server - Fastify instance.
 */
async function plugin(server) {
	server.addHook("onRequest", async (req, reply) => {
		reply.headers({
			"Surrogate-Control": "no-store",
			"Cache-Control": "no-store, max-age=0",
			Pragma: "no-cache",
			Expires: "0",
		});
	});
}

module.exports = fp(plugin, { fastify: "3.x", name: "fastify-disablecache" });
