"use strict";

const assert = require("node:assert");
const { after, before, describe, it } = require("node:test");
const Fastify = require("fastify");
const plugin = require(".");

/**
 * @author Frazer Smith
 * @description Check if an object contains a subset of properties.
 * @todo Replace with `assert.partialDeepStrictEqual` when available.
 * @param {Record<string, any>} actual - The actual object.
 * @param {Record<string, any>} expected - The expected subset of properties.
 */
function matchObject(actual, expected) {
	for (const [key, value] of Object.entries(expected)) {
		assert.deepStrictEqual(
			actual[key],
			value,
			`Expected ${key} to be ${value}, but got ${actual[key]}`
		);
	}
}

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

		it("Sets relevant cache response headers", async (t) => {
			const response = await server.inject({
				method: "GET",
				url: "/",
			});

			t.plan(2);
			t.assert.strictEqual(response.body, "ok");
			matchObject(response.headers, {
				"cache-control": "no-store, max-age=0, must-revalidate",
				expires: "0",
				pragma: "no-cache",
				"surrogate-control": "no-store",
			});
			t.assert.strictEqual(response.statusCode, 200);
		});
	});
});
