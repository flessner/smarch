variable "DO_PAT" {}
variable "CF_TOKEN" {}

terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "~> 3.0"
    }
  }
}

provider "digitalocean" {
  token = var.DO_PAT
}

provider "cloudflare" {
  api_token = var.CF_TOKEN
}

resource "digitalocean_project" "project_smarch" {
  name        = "smarch"
  resources = [
    digitalocean_app.web_cloud.id,
    digitalocean_app.web_main.id,
    digitalocean_app.web_terminal.id
  ]
}

output "web-id" {
  value = digitalocean_app.web_cloud.id
}
