resource "digitalocean_app" "cloud" {
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

resource "digitalocean_app" "main" {
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

resource "digitalocean_app" "terminal" {
  spec {
    name   = "smarch-terminal"
    region = "nyc"

    domain {
      name = "terminal.smarch.net"
      type = "PRIMARY"
    }

    static_site {
      name          = "main"
      source_dir    = "/ui/terminal"
      build_command = "npm run build"

      github {
        deploy_on_push = true
        branch         = "master"
        repo           = "flessner/smarch"
      }
    }
  }
}
