import * as HyperExpress from "hyper-express"
import { knex } from "knex"

const cors = require('cors')
const server = new HyperExpress.Server()
const env = process.env

const logger = require('pino')({ level: "info" })
const frame = {

}

// Settings & middleware
server.use(cors())
server.use('/', (req, res, next) => {
  logger.info(req.method + " " + req.path)
  next()
})

// Sub-routes for each service
server.use("/gate", require("./gate").init(frame))

// Starting & error handling
server.set_error_handler((err) => {
  logger.error(err)
})

server.listen(parseInt(env.PORT))
  .then(async () => {
    logger.info("🚀 API started on port " + env.PORT)
  })
  .catch(err => { logger.error(err) })