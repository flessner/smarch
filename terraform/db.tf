resource "digitalocean_database_cluster" "redis_nyc" {
  name       = "smarch-redis"
  engine     = "redis"
  version    = 6
  size       = "db-m-4vcpu-32gb"
  region     = "fra1"
  node_count = 1
}
