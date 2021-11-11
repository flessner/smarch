resource "digitalocean_kubernetes_cluster" "k8_banana" {
  name    = "k8_banana"
  region  = "nyc"
  version = "1.20.2-do.0"
}
