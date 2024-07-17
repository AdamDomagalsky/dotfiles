#! /bin/bash

DOTFILES=(.gitignore .zshrc .p10k.zsh .terragrunt_aliases .terraform_aliases)

for dotfile in $(echo ${DOTFILES[*]});
do
    cp ~/dotfiles/$(echo $dotfile) ~/$(echo $dotfile)
    echo "Copied $dotfile"
done
echo "Done!"