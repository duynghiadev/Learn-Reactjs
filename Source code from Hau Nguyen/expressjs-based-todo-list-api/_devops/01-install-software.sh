
#!/bin/bash
# =========
# OS: Ubuntu 18.04
# Softwares: NodeJS@12.x, python@2.7, git@latest
# Setup OS-Level Dependencies
# =========

# Initialize first Ubuntu server

# Add NodeJS PPA
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

# Update all repo
sudo apt-get update

# Install NodeJS, git, mongodb, python 2.7.x (to compile bcrypt)
sudo apt-get install -y nodejs git build-essential

# Add public key to gitlab or github
cat ~/.ssh/id_rsa.pub
echo "Manually add pub key to ssh keys on git server"

# =========
# Setup App-Level Dependencies
# =========

# Config git
mkdir -p apps
mkdir -p apps/todo
# git clone git@github.com:tuanquynet/expressjs-based-todo-list-api.git
cd apps/todo
git clone https://github.com/tuanquynet/expressjs-based-todo-list-api.git

# go to goalify-webapp directory
APP_DIR=~/apps/todo/expressjs-based-todo-list-api
cd $APP_DIR
# Checkout master branch of repo
git checkout master

cd $APP_DIR
npm install

# Add .env file for production
nano .env
echo "Add any env variable to .env, example MONGO_URI"

