export function init(server) {
  server.get("/auth", (req, res) => {
    res.status("200")
    res.send("OK ✔️")
  })
}