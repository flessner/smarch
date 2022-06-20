resource "random_password" "keydb" {
  length           = 12
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "digitalocean_droplet" "keydb" {
  image    = "docker-20-04"
  name     = "smarch-keydb"
  region   = "fra1"
  size     = "m-2vcpu-16gb"
  volume_ids = [ digitalocean_volume.cb_master.id ]
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
      "sleep 10s",
      "docker run -d --name keydb -p 6379:6379 eqalpha/keydb keydb-server /etc/keydb/keydb.conf --requirepass ${random_password.keydb.result}"
    ]
  }
}