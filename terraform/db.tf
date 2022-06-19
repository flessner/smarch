resource "kubernetes_persistent_volume_claim" "test-pv" {
  metadata {
    name = "test-pv"
  }
  spec {
    access_modes = ["ReadWriteOnce"]
    storage_class_name = "do-block-storage"
    resources {
      requests = {
        storage = "200Gi"
      }
    }
  }
}

resource "digitalocean_database_cluster" "redis_nyc" {
  name       = "smarch-redis"
  engine     = "redis"
  version    = 6
  size       = "db-m-4vcpu-32gb"
  region     = "fra1"
  node_count = 1
}
