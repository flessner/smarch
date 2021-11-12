export function init(server) {
  server.get("/gate", (req, res) => {
    res.status("200")
    res.send("OK ✔️")
  })
}