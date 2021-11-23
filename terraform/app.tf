

resource "digitalocean_app" "app_web_main" {
  spec {
    name   = "app-web-cloud"
    region = "nyc"

    domain {
      name = "smarch.net"
      type = "PRIMARY"
    }

    static_site {
      name              = "main"
      source_dir        = "ui/main"
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

    domain {
      name = "eu.api.smarch.net"
      type = "PRIMARY"
    }

    env {
      key   = "API_LOCATION"
      value = "fra"
    }
    env {
      key   = "REDIS_HOST"
      value = digitalocean_database_cluster.redis_nyc.host
    }
    env {
      key   = "REDIS_PORT"
      value = digitalocean_database_cluster.redis_nyc.port
    }
    env {
      key   = "REDIS_USER"
      value = digitalocean_database_cluster.redis_nyc.user
      type  = "SECRET"
    }
    env {
      key   = "REDIS_PASS"
      value = digitalocean_database_cluster.redis_nyc.password
      type  = "SECRET"
    }

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
