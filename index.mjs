import Fastify from "fastify";
import { createReadStream } from "node:fs";

const fastify = Fastify({
  logger: true,
});

await fastify.register(import("@fastify/throttle"), {
  bytesPerSecond: 1024 * 3,
  streamPayloads: true,
  stringPayloads: true,
  bufferPayloads: true,
  async: true,
});

fastify.get("/", (request, reply) => {
  const index = createReadStream("index.html", { encoding: "utf-8" });
  return reply.send(index);
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
