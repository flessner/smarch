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

// URLs
output "url_web_main" {
  value = digitalocean_app.app_web_main.default_ingress
}


output "url_api_fra" {
  value = digitalocean_app.app_api_fra.default_ingress
}
