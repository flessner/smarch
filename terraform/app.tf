resource "digitalocean_app" "app_web_cloud" {
  spec {
    name   = "app_web_cloud"
    region = "nyc"

    static_site {
      name              = "app_web_cloud"
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

resource "digitalocean_app" "app_api" {
  spec {
    name   = "app_api"
    region = "nyc"

    service {
      name             = "app_api"
      environment_slug = "node"
      source_dir       = "api"
      http_port        = "6060"
      build_command    = "npm run build"
      run_command      = "npm run start"

      github {
        deploy_on_push = true
        branch         = "master"
        repo           = "flessner/smarch"
      }
    }
  }
}
