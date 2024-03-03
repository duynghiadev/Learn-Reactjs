
# CERT_DOMAIN=test-api-01.my-demo.fun
# CERT_EMAIL=tuanquynet@gmail.com

# issue ssl with nginx mode
# ex: acme.sh --issue --nginx -d example.com -d www.example.com -d cp.example.com
# User home is /home/USERNAME
USER_HOME=/home/devops
mkdir -p $USER_HOME/nginx
NGINX_WEBROOT=/var/www/html

# use webroot acme.sh --issue -d example.com --webroot
# acme.sh --issue -d $CERT_DOMAIN --webroot $NGINX_WEBROOT
cd $USER_HOME/.acme.sh
./acme.sh --issue -d test-api-01.my-demo.fun --webroot /var/www/html

mkdir -p ~/certs/
mkdir -p ~/certs/test-api-01.my-demo.fun
./acme.sh --install-cert -d test-api-01.my-demo.fun \
  --key-file ~/certs/test-api-01.my-demo.fun/key.pem \
  --fullchain-file ~/certs/test-api-01.my-demo.fun/fullchain.pem \
  --reloadcmd "systemctl reload nginx.service"
