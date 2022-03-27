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
