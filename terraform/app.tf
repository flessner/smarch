resource "digitalocean_app" "web_cloud" {
  spec {
    name   = "smarch-cloud"
    region = "nyc"

    domain {
      name = "cloud.smarch.net"
      type = "PRIMARY"
    }

    static_site {
      name              = "main"
      source_dir        = "/ui/cloud"
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

resource "digitalocean_app" "web_main" {
  spec {
    name   = "smarch-web"
    region = "nyc"

    domain {
      name = "smarch.net"
      type = "PRIMARY"
    }

    static_site {
      name          = "main"
      source_dir    = "/ui/main"
      build_command = "npm run build"

      github {
        deploy_on_push = true
        branch         = "master"
        repo           = "flessner/smarch"
      }
    }
  }
}

resource "digitalocean_app" "api_nyc" {
  spec {
    name   = "smarch-api-nyc"
    region = "nyc"

    domain {
      name = "api.smarch.net"
      type = "PRIMARY"
    }

    env {
      key   = "PS_HOST"
      value = var.PS_HOST
    }
    env {
      key   = "PS_USER"
      value = var.PS_USER
    }
    env {
      key   = "PS_PW"
      value = var.PS_PW
    }
    env {
      key   = "PS_DB"
      value = var.PS_DB
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
