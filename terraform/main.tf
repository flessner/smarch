variable "DO_PAT" {}
variable "CF_TOKEN" {}

// SETUP
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

// KUBERNETES
resource "digitalocean_kubernetes_cluster" "cluster_kiwi" {
  name    = "smarch-kiwi"
  region  = "fra1"
  version = "1.22.8-do.1"

  node_pool {
    name       = "worker-pool"
    size       = "s-2vcpu-2gb"
    node_count = 3
  }
}

provider "kubernetes" {
  host             = digitalocean_kubernetes_cluster.cluster_kiwi.endpoint
  token            = digitalocean_kubernetes_cluster.cluster_kiwi.kube_config[0].token
  cluster_ca_certificate = base64decode(
    digitalocean_kubernetes_cluster.cluster_kiwi.kube_config[0].cluster_ca_certificate
  )
}

provider "helm" {
  kubernetes {
    host = digitalocean_kubernetes_cluster.cluster_kiwi.endpoint
    cluster_ca_certificate = base64decode(
      digitalocean_kubernetes_cluster.cluster_kiwi.kube_config[0].cluster_ca_certificate
    )
    token = digitalocean_kubernetes_cluster.cluster_kiwi.kube_config[0].token
  }
}