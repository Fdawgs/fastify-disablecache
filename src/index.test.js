const Fastify = require("fastify");
const plugin = require(".");

describe("Disablecache plugin", () => {
	describe("Response headers", () => {
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

		it("Sets relevant cache response headers", async () => {
			const response = await server.inject({
				method: "GET",
				url: "/",
			});

			expect(response.payload).toBe("ok");
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
