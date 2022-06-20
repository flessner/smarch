variable "DO_PAT" {}

// SETUP
terraform {
  cloud {
    organization = "smarch"

    workspaces {
      name = "smarch"
    }
  }

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
