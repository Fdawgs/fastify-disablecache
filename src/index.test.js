"use strict";

const Fastify = require("fastify");
const plugin = require(".");

describe("Disablecache plugin", () => {
	describe("Response headers", () => {
		/** @type {Fastify.FastifyInstance} */
		let server;

		beforeAll(async () => {
			server = Fastify({ pluginTimeout: 0 });
			server.register(plugin);

			server.get("/", (_req, res) => {
				res.send("ok");
			});

			await server.ready();
		});

		afterAll(async () => {
			await server.close();
		});

		it("Sets relevant cache response headers", async () => {
			const response = await server.inject({
				method: "GET",
				url: "/",
			});

			expect(response.body).toBe("ok");
			expect(response.headers).toMatchObject({
				"cache-control": "no-store, max-age=0, must-revalidate",
				expires: "0",
				pragma: "no-cache",
				"surrogate-control": "no-store",
			});
			expect(response.statusCode).toBe(200);
		});
	});
});
