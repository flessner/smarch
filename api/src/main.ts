import { fastify } from "fastify"

const server = fastify();

async function init() {
  await server.register(require('fastify-cors'));

  await server.register(require('../src/routes/health'), { prefix: '/health' });

  server.setErrorHandler((err, req, res) => {
    req.log.error(err.toString());
    res.send({ err });
  });

  server.listen(6060, (err, address) => {
    if (err) throw err;
    console.log(`🚀 listening on ${address}`);
  });
};

module.exports = init();
