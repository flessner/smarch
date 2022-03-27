import { time } from "console"
import * as HyperExpress from "hyper-express"
import { knex } from "knex"

const server = new HyperExpress.Server()
const env = process.env

if (process.env.TS_NODE_DEV) {
  require("dotenv").config()
}

const logger = require('pino')({ level: "info" })
const frame = {
  astrum: knex({
    client: 'mysql2',
    connection: {
      host: env.PS_HOST,
      user: env.PS_USER,
      password: env.PS_PW,
      database: env.PS_DB,
      ssl: {
        rejectUnauthorized: true
      }
    }
  }),
  logger
}

// Sub-routes for each service
server.use("/gate", require("./gate").init(frame))

server.use('/', (req, res, next) => {
  logger.info(req.method + " " + req.path)
  next()
})

server.set_error_handler((err) => {
  logger.error(err)
})

server.listen(parseInt(env.PORT))
  .then(async () => {
    logger.info("🚀 API started on port " + env.PORT)

    let data = await frame.astrum("evm_chains").select("*")
    console.log(data)
  })
  .catch(err => { logger.error(err) })
