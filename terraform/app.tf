resource "digitalocean_app" "app_web_cloud" {
  spec {
    name   = "app-web-cloud"
    region = "nyc"

    static_site {
      name              = "main"
      source_dir        = "web/cloud"
      build_command     = "npm run build"
      catchall_document = "index.html"

      github {
        deploy_on_push = true
        branch         = "master"
        repo           = "flessner/smarch"
      }
    }
  }
}

resource "digitalocean_app" "app_api_fra" {
  spec {
    name   = "app-api-fra"
    region = "fra"

    service {
      name          = "main"
      source_dir    = "api"
      http_port     = "6060"
      build_command = "npm run build"
      run_command   = "npm run start"

      github {
        deploy_on_push = true
        branch         = "master"
        repo           = "flessner/smarch"
      }
    }
  }
}

resource "digitalocean_app" "app_api_nyc" {
  spec {
    name   = "app-api-nyc"
    region = "nyc"

    service {
      name          = "main"
      source_dir    = "api"
      http_port     = "6060"
      build_command = "npm run build"
      run_command   = "npm run start"

      github {
        deploy_on_push = true
        branch         = "master"
        repo           = "flessner/smarch"
      }
    }
  }
}

resource "digitalocean_database_cluster" "redis_fra" {
  name       = "redis-fra"
  engine     = "redis"
  version    = 6
  size       = "db-s-1vcpu-1gb"
  region     = "fra"
  node_count = 1
}

resource "digitalocean_database_replica" "redis_nyc" {
  cluster_id = digitalocean_database_cluster.redis_fra.id
  name       = "redis-nyc"
  size       = "db-s-1vcpu-1gb"
  region     = "nyc"
}
