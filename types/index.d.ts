import type { FastifyPluginCallback } from "fastify";

declare namespace fastifyDisablecache {
	export const fastifyDisablecache: FastifyPluginCallback;
	export { fastifyDisablecache as default };
}

declare function fastifyDisablecache(
	...params: Parameters<FastifyPluginCallback>
): ReturnType<FastifyPluginCallback>;
export = fastifyDisablecache;
