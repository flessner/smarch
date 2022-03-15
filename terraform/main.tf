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

// URLs
output "url_web" {
  value = digitalocean_app.web_main.default_ingress
}

output "url_web_cloud" {
  value = digitalocean_app.web_cloud.default_ingress
}

output "url_api_fra" {
  value = digitalocean_app.api_fra.default_ingress
}
