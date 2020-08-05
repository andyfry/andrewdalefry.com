#! /usr/bin/env sh

info () {
  printf "\r  [ \033[00;34m..\033[0m ] $1\n"
}

user () {
  printf "\r  [ \033[0;33m??\033[0m ] $1\n"
}

success () {
  printf "\r\033[2K  [ \033[00;32mOK\033[0m ] $1\n"
}

fail () {
  printf "\r\033[2K  [\033[0;31mFAIL\033[0m] $1\n"
  echo ''
  exit
}

echo ''
echo "Setting Up Machine"


info "Prompting for sudo password..."
if sudo -v; then
    # Keep-alive: update existing `sudo` time stamp until `setup.sh` has finished
    while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &
    success "Sudo credentials updated."
else
    fail "Failed to obtain sudo credentials."
fi

info "Installing Homebrew package manager"
if test ! $(which brew); then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  success "Finished installing Homebrew."
else
  success "Homebrew already installed."
fi

info "Cloning dotfile Repository"
if [ -d ".dotfiles" ]; then
  info "Archiving old .dotfiles..."
  mv .dotfiles dotfiles.old
fi
git clone https://github.com/andyfry/dotfiles.git .dotfiles

./dotfiles/bootstrap.sh
