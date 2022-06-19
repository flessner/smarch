resource "digitalocean_kubernetes_cluster" "cluster_kiwi" {
  name    = "smarch-kiwi"
  region  = "fra1"
  version = "1.22.8-do.1"

  node_pool {
    name       = "worker-pool"
    size       = "s-2vcpu-2gb"
    node_count = 3
  }
}

provider "kubernetes" {
  host             = digitalocean_kubernetes_cluster.cluster_kiwi.endpoint
  token            = digitalocean_kubernetes_cluster.cluster_kiwi.kube_config[0].token
  cluster_ca_certificate = base64decode(
    digitalocean_kubernetes_cluster.cluster_kiwi.kube_config[0].cluster_ca_certificate
  )
}

output "cluster-id" {
  value = digitalocean_kubernetes_cluster.cluster_kiwi.id
}

  