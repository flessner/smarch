import { Interpreter } from "./interpreter";
const Redis = require("ioredis");
const readline = require('readline');

const env = process.env

const logger = require('pino')({ level: "info" })
const saram = new Redis(`rediss://${env.REDIS_USERNAME}:${env.REDIS_PASSWORD}@${env.REDIS_HOST}:${env.REDIS_PORT}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const interpreter = new Interpreter({ logger });

function terminal() {
  rl.question('> ', (input) => {
    if (!interpreter.validate(input)) {
      console.log(interpreter.reason(input));
      terminal();
    } else {
      saram.lpush("smash.v1", input).then(() => {
        console.info("Action queued!");
        setTimeout(terminal, 1000)
      });
    }
  });
}

terminal();
