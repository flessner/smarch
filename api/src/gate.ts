import * as HyperExpress from "hyper-express"
const axios = require('axios').default

export function init(frame) {
  const router = new HyperExpress.Router()
  const logger = frame.logger

  router.post("/evm/:id", { expect_body: "json" }, async (req, res) => {
    let chainId = req.params.id
    let body = await req.json()

    logger.info(req.path)
    logger.debug(body)

    if (body.jsonrpc != "2.0") {
      res.status(400)
      res.send("Invalid JSON-RPC Version")
      return
    }
    if (chainId != "43114") {
      res.status(400)
      res.send("Invalid Chain ID")
      return
    }

    const { data } = await axios.post('https://api.avax.network/ext/bc/C/rpc', body)
    logger.debug(data)

    res.status(200)
    res.json(data)
  })

  return router;
}
