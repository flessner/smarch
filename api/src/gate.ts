import { TemplatedApp } from "uWebSockets.js"

export function init(server: TemplatedApp) {
  server.get("/gate", (res, req) => {
    res.writeStatus("200")
    res.end("OK ✔️")
  })
}