import * as HyperExpress from "hyper-express"
import { WSRouteOptions } from "hyper-express/types/components/router/Router"
import * as Redis from "ioredis"

const server = new HyperExpress.Server()
const env = process.env

let redisAuth = `rediss://${env.REDIS_USER}:${env.REDIS_PASS}@${env.REDIS_HOST}:${env.REDIS_PORT}` || {}
if (process.env.TS_NODE_DEV) {
  require("dotenv").config()
  redisAuth = { host: env.REDIS_HOST, password: env.REDIS_PASS, port: env.REDIS_PORT }
}

const db = {
  redis: new Redis(redisAuth),
  redisSub: new Redis(redisAuth),
  redisPub: new Redis(redisAuth),
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

// db.sub("meta")
// server.ws("/api", {
//   idle_timeout: 0
// } as WSRouteOptions, (ws) => {
//   db.msg((channel, message) => ws.send(message))
// })

server.listen(parseInt(env.PORT))
  .then(() => { console.log("🚀 Listening on port " + env.PORT) })
  .catch(err => { console.error(err) })
