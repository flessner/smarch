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

resource "tls_private_key" "default" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "digitalocean_ssh_key" "default" {
  name       = "smarch-terraform"
  public_key = "${tls_private_key.default.public_key_openssh}"
  depends_on = [tls_private_key.default]
}

output "private_key" {
  value     = tls_private_key.default.private_key_pem
  sensitive = true
}
