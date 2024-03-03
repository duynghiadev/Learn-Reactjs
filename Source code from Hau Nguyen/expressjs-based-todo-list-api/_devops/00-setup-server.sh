#configure timezone
export time_zone=Asia/Ho_Chi_Minh
sudo cp -vf /usr/share/zoneinfo/$time_zone /etc/localtime
echo $time_zone | sudo tee /etc/timezone

echo "add user devops"
sudo adduser devops

# add devops to sudo group
sudo usermod -aG sudo devops

echo "Switch to devops user"
su - devops

echo "Define locale"
sudo localedef -i en_US -f UTF-8 en_US.UTF-8

sudo sh -c 'cat << EOF >> /etc/environment
LC_ALL=en_US.UTF-8
LANG=en_US.UTF-8
EOF'

echo "generate ssh key with name 'id_rsa'"
ssh-keygen

echo "Create a new directory called .ssh and restrict its permissions with the following commands:"
#mkdir ~/.ssh
sudo chmod -R 700 ~/.ssh

# Add remote user's public key into authorized_keys of devops user
nano ~/.ssh/authorized_keys

# Now restrict the permissions of the authorized_keys file with this command:
chmod 600 ~/.ssh/authorized_keys

# exit