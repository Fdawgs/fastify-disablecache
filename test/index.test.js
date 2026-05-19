"use strict";

const { after, before, describe, it } = require("node:test");
const Fastify = require("fastify");
const plugin = require("../src");

/** @typedef {import('node:test').TestContext} TestContext */

describe("Disablecache plugin", () => {
	describe("Response headers", () => {
		/** @type {Fastify.FastifyInstance} */
		let server;

		before(async () => {
			server = Fastify({ pluginTimeout: 0 });
			server.register(plugin);

			server.get("/", (_req, res) => {
				res.send("ok");
			});

			await server.ready();
		});

		after(async () => server.close());

		it("Sets relevant cache response headers", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/",
			});

			t.plan(3);
			t.assert.strictEqual(response.body, "ok");
			t.assert.partialDeepStrictEqual(response.headers, {
				"cache-control":
					"no-store, max-age=0, must-revalidate, proxy-revalidate",
				expires: "0",
				pragma: "no-cache",
				"surrogate-control": "no-store",
			});
			t.assert.strictEqual(response.statusCode, 200);
		});
	});
});
