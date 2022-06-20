resource "digitalocean_droplet" "cb-master" {
  image    = "docker-20-04"
  name     = "smarch-cb-master"
  region   = "fra1"
  size     = "m-4vcpu-32gb"
  volume_ids = [ digitalocean_volume.cb-master.id ]
  ssh_keys = [ digitalocean_ssh_key.default.id ]

  provisioner "remote-exec" {
    inline = [
      "sleep 10s",
      "docker run -d --name db -p 8091-8096:8091-8096 -p 11210-11211:11210-11211 -v /mnt/smarch_cb:/opt/couchbase/var couchbase"
    ]

    connection {
      type = "ssh"
      host = self.ipv4_address
      user = "root"
      timeout = "300"
      private_key = tls_private_key.default.private_key_pem
    }
  }
}

resource "digitalocean_volume" "cb-master" {
  region           = "fra1"
  name             = "smarch-cb-master"
  size             = 1000
  initial_filesystem_type  = "ext4"
}
