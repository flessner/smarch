resource "digitalocean_database_cluster" "redis_nyc" {
  name       = "smarch-redis"
  engine     = "redis"
  version    = 6
  size       = "db-s-1vcpu-2gb"
  region     = "nyc3"
  node_count = 1
}
