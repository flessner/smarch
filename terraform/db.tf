resource "digitalocean_droplet" "cb-1" {
  image    = "docker-20-04"
  name     = "smarch-cb-1"
  region   = "fra1"
  size     = "m-4vcpu-32gb"
  volume_ids = [ digitalocean_volume.cb-1.id ]
  ssh_keys = [ digitalocean_ssh_key.default.id ]

  connection {
    type = "ssh"
    host = self.ipv4_address
    user = "root"
    timeout = "300"
    private_key = tls_private_key.default.private_key_pem
  }

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
