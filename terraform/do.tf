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
  name = "smarch"
  resources = [

  ]
}
