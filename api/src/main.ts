import * as HyperExpress from "hyper-express"

const env = process.env
const server = new HyperExpress.Server()

require('./auth').init(server)
require('./gate').init(server)

console.log(env)

server.get("/meta", (req, res) => {
  res
    .status(200)
    .json({
      version: env.npm_package_version,
      port: env.PORT
    })
})

server.listen(6060)
  .then(() => { console.log("🚀 Listening on port 6060") })
  .catch(err => { console.error(err) })
