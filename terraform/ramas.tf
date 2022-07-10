variable "RAMAS_USER" {}
variable "RAMAS_PASSWORD" {}

/*
resource "digitalocean_droplet" "ramas_master" {
  image      = "docker-20-04"
  name       = "smarch-ramas-master"
  region     = "fra1"
  size       = "m-4vcpu-32gb"
  volume_ids = [digitalocean_volume.ramas_master.id]
  ssh_keys   = [digitalocean_ssh_key.default.id]

  connection {
    type        = "ssh"
    host        = self.ipv4_address
    user        = "root"
    timeout     = "300"
    private_key = tls_private_key.default.private_key_pem
  }

  provisioner "remote-exec" {
    inline = [
      "sleep 10s",
      "docker run -d --name couchbase -p 8091-8096:8091-8096 -p 11210-11211:11210-11211 -v /mnt/smarch_ramas_master:/opt/couchbase/var couchbase"
    ]
  }
}

resource "digitalocean_volume" "ramas_master" {
  region                  = "fra1"
  name                    = "smarch-ramas-master"
  size                    = 1000
  initial_filesystem_type = "ext4"
}
*/
