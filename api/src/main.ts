import * as HyperExpress from "hyper-express"

if (process.env.TS_NODE_DEV) {
  require("dotenv").config()
}

const env = process.env
const server = new HyperExpress.Server()

require('./auth').init(server)
require('./gate').init(server)

server.get("/meta", (req, res) => {
  res
    .status(200)
    .json({
      version: env.npm_package_version,
      location: env.API_LOCATION
    })
})

server.listen(parseInt(env.PORT))
  .then(() => { console.log("🚀 Listening on port " + env.PORT) })
  .catch(err => { console.error(err) })
