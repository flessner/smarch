resource "digitalocean_app" "web-cloud" {
  spec {
    name   = "web-cloud"
    region = "nyc3"

    static_site {
      name          = "web-cloud"
      source_dir    = "web-cloud"
      build_command = "npm run build"

      github {
        deploy_on_push = true
        branch         = "master"
        repo           = "flessner/smarch"
      }
    }
  }
}