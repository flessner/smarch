import * as HyperExpress from "hyper-express"
import { WSRouteOptions } from "hyper-express/types/components/router/Router"
import * as Redis from "ioredis"

if (process.env.TS_NODE_DEV) {
  require("dotenv").config()
}

const server = new HyperExpress.Server()
const env = process.env
const db = {
  redis: new Redis({ host: env.REDIS_HOST, password: env.REDIS_PASSWORD, port: parseInt(env.REDIS_PORT) }),
  redisSub: new Redis({ host: env.REDIS_HOST, password: env.REDIS_PASSWORD, port: parseInt(env.REDIS_PORT) }),
  redisPub: new Redis({ host: env.REDIS_HOST, password: env.REDIS_PASSWORD, port: parseInt(env.REDIS_PORT) }),
  pub: (channel: string, message: string) => db.redisPub.publish(channel, message),
  sub: (channel: string) => db.redisSub.subscribe(channel),
  msg: (callback) => db.redisSub.on("message", callback)
}

server.set_error_handler((err) => {
  console.error(err)
})

require('./auth').init(server, db)
require('./gate').init(server, db)

server.get("/meta", (req, res) => {
  db.pub("meta", req.ip)
  res.status(200).json({
    version: env.npm_package_version,
    location: env.API_LOCATION
  })
})

db.sub("meta")
server.ws("/api", {
  idle_timeout: 0
} as WSRouteOptions, (ws) => {
  console.log(ws.ip + ' is now connected using websockets!');
  db.msg((channel, message) => ws.send(message))
})

server.listen(parseInt(env.PORT))
  .then(() => { console.log("🚀 Listening on port " + env.PORT) })
  .catch(err => { console.error(err) })
