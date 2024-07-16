#! /bin/bash

DOTFILES=(.gitignore .zshrc .p10k.zsh)

for dotfile in $(echo ${DOTFILES[*]});
do
    cp ~/dotfiles/$(echo $dotfile) ~/$(echo $dotfile)
    echo "Copied $dotfile"
done
echo "Done!"