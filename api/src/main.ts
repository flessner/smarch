import { App } from "uWebSockets.js"

const pkg = require('../package.json');
const server = App()

require('./auth').init(server)
require('./gate').init(server)

server.get("/meta", (res, req) => {
  res.writeStatus("200")
  res.writeHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ version: pkg.version }))
})

server.listen(6060, () => {
  console.log("🚀 Listening on port 6060")
})
