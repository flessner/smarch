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
      name               = "main"
      source_dir         = "api"
      http_port          = "6060"
      instance_size_slug = "basic-xxs"
      build_command      = "npm run build"
      run_command        = "npm run start"

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
      name               = "main"
      source_dir         = "api"
      http_port          = "6060"
      instance_size_slug = "basic-xxs"
      build_command      = "npm run build"
      run_command        = "npm run start"

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
  region     = "fra1"
  node_count = 1
}
