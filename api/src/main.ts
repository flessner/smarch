import * as HyperExpress from "hyper-express"
import { Knex, knex } from "knex"

const server = new HyperExpress.Server()
const env = process.env

if (process.env.TS_NODE_DEV) {
  require("dotenv").config()
}

const logger = require('pino')({ level: "info" })
const frame = {
  /*
  astrum: knex({
    client: 'mysql',
  })
  */
  logger
}

server.set_error_handler((err) => {
  console.error(err)
})

server.use("/gate/v1", require("./gate").init(frame))

server.listen(parseInt(env.PORT))
  .then(() => { logger.info("🚀 API started on port " + env.PORT) })
  .catch(err => { logger.error(err) })
