FROM debian:stable-slim

ENV VERSION=1.1.4

RUN apt-get update -y
RUN apt-get install -y curl jq unzip ca-certificates make git bash apt-utils

RUN curl -L "https://github.com/binance-chain/bsc/releases/download/v${VERSION}/geth_linux" -o /tmp/geth_linux

COPY /bsc/config.toml /home/config.toml
RUN mv /tmp/geth_linux /usr/local/bin/geth && chmod +x /usr/local/bin/geth

# p2p
EXPOSE 30311/udp
EXPOSE 30311/tcp

# http/ws port
EXPOSE 8545/tcp
EXPOSE 8546/tcp

ENTRYPOINT geth --config /home/config.toml --syncmode light
