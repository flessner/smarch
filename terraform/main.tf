variable "DO_PAT" {}

terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.DO_PAT
}

resource "digitalocean_project" "smarch" {
  name      = "smarch"
  resources = []
}

output "api_nyc_ingress" {
  value = digitalocean_app.app_api_nyc.default_ingress
}

output "api_nyc_url" {
  value = digitalocean_app.app_api_nyc.live_url
}
