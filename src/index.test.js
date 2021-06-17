const Fastify = require("fastify");
const plugin = require(".");

describe("Disablecache Plugin", () => {
	describe("Response Headers", () => {
		let server;

		beforeAll(async () => {
			server = Fastify();
			server.register(plugin);

			server.get("/", (req, res) => {
				res.send("ok");
			});

			await server.ready();
		});

		afterAll(async () => {
			await server.close();
		});

		test("Should set relevant cache response headers", async () => {
			const response = await server.inject({
				method: "GET",
				url: "/",
			});

			expect(response.statusCode).toEqual(200);
			expect(response.headers).toEqual(
				expect.objectContaining({
					"surrogate-control": "no-store",
					"cache-control": "no-store, max-age=0, must-revalidate",
					pragma: "no-cache",
					expires: "0",
				})
			);
			expect(response.payload).toEqual("ok");
		});
	});
});
