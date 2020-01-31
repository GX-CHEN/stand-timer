  
cd '/root/stand-timer/' || exit
git pull
npm install
npm run build
sudo cp -r build/ /var/www/html/timer/
sudo service nginx reload