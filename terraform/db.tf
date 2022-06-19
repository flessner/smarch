resource "kubernetes_persistent_volume_claim" "test-pv" {
  spec {
    access_modes = ["ReadWriteOnce"]
    storage_class_name = "do-block-storage"
    resources {
      requests = {
        storage = "100Gi"
      }
    }
  }
}
