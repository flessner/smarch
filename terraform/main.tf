variable "DO_PAT" {}
variable "PS_HOST" {}
variable "PS_USER" {}
variable "PS_PW" {}
variable "PS_DB" {}

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

output "url_web" {
  value = digitalocean_app.web_main.default_ingress
}

output "url_cloud" {
  value = digitalocean_app.web_cloud.default_ingress
}

output "url_api" {
  value = digitalocean_app.api_nyc.default_ingress
}
