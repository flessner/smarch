FROM archlinux

RUN pacman -Sy geth --noconfirm

ENTRYPOINT geth --syncmode "light"
