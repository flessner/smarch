import { Interpreter } from './interpreter';
import { Cluster } from 'couchbase';

const Redis = require("ioredis");
const pino = require('pino');

const env = process.env

async function main() {
  const logger = pino({ level: "info" })
  const saram = await new Redis(`rediss://${env.SARAM_USERNAME}:${env.SARAM_PASSWORD}@${env.SARAM_HOST}:${env.SARAM_PORT}`);
  const ramas = await Cluster.connect(
    `couchbase://${env.RAMAS_HOST}`,
    {
      username: env.RAMAS_USERNAME,
      password: env.RAMAS_PASSWORD,
    }
  );

  const interpreter = new Interpreter({ logger, saram, ramas });
  async function execHandler() {
    const response = saram.brpop("smash.v1", 0);

    response.then(async ([, msg]) => {
      interpreter.exec(msg);
      setTimeout(execHandler, 4);
    })
  }

  //interpreter.exec("EVM_SCAN_BLOCK --chain 43114 --block 0x45c65d2fed09da5c00fa83f60a7e4788bd613e926a92267ab84ce4dc0265b885");
  logger.info("Starting smash-core...");
  setTimeout(execHandler, 1000);
}

setTimeout(main, 200);
