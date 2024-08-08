#! /bin/bash

DOTFILES=(.gitignore .zshrc .p10k.zsh .terragrunt_aliases .terraform_aliases .gitignore_global)

for dotfile in $(echo ${DOTFILES[*]});
do
    cp ~/dotfiles/$(echo $dotfile) ~/$(echo $dotfile)
    echo "Copied $dotfile"
    git config --global core.excludesfile ~/.gitignore_global
done
echo "Done!"