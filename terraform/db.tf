resource "digitalocean_droplet" "cb-1" {
  image  = "docker-20-04"
  name   = "smarch-cb-1"
  region = "fra1"
  size   = "m-4vcpu-32gb"

  provisioner "remote-exec" {
    inline = [
      "echo hi"
    ]
  }
}

resource "digitalocean_volume" "cb-1" {
  region           = "fra1"
  name             = "smarch-cb-1"
  size             = 1000
  initial_filesystem_type  = "ext4"
  initial_filesystem_label = "cb"
}

resource "digitalocean_volume_attachment" "cb-1" {
  droplet_id = digitalocean_droplet.cb-1.id
  volume_id  = digitalocean_volume.cb-1.id
}

