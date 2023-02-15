import type { FastifyPluginAsync } from 'fastify';

declare namespace fastifyDisablecache {
  export const fastifyDisablecache: FastifyPluginAsync
  export { fastifyDisablecache as default }
}

declare function fastifyDisablecache(...params: Parameters<FastifyPluginAsync>): ReturnType<FastifyPluginAsync>
export = fastifyDisablecache
