const fp = require("fastify-plugin");
const nocache = require("nocache");

/**
 * @author Frazer Smith
 * @description Simple wrapper that adds an `onRequest` hook to call `nocache`, which turns off
 * client-side caching by setting the relevant response headers.
 * See https://github.com/helmetjs/nocache
 * @param {Function} server - Fastify instance.
 */
async function plugin(server) {
	const middleware = nocache();

	server.addHook("onRequest", (req, reply, next) => {
		middleware(req.raw, reply.raw, next);
	});
}

module.exports = fp(plugin, { fastify: "3.x", name: "fastify-disablecache" });
