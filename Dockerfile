# Utilisation de l'image nginx légère
FROM nginx:alpine

# Copier tous tes fichiers dans le dossier web de nginx
COPY . /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Lancer nginx en mode "foreground"
CMD ["nginx", "-g", "daemon off;"]