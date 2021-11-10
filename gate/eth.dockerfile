FROM archlinux:base

RUN pacman -Sy geth --noconfirm

ENTRYPOINT geth -syncmode light
