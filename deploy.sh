echo -e "\033[94m Copy .env files to server...\033[0m"
scp -r -i ~/.ssh/id_vgen .env.local root@64.225.52.191:/var/www/vgen
echo -e "\033[94m Done!\033[0m"