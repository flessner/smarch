variable "DO_PAT" {}
variable "CF_TOKEN" {}
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
