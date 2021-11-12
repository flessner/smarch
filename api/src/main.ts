import * as HyperExpress from "hyper-express"

const pkg = require('../package.json');
const server = new HyperExpress.Server()

require('./auth').init(server)
require('./gate').init(server)

server.get("/meta", (req, res) => {
  res
    .status(200)
    .json({ version: pkg.version })
})

server.listen(6060)
  .then(() => { console.log("🚀 Listening on port 6060") })
  .catch(err => { console.error(err) })
