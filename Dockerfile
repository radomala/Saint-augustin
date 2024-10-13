# Étape 1 : Utiliser une image node pour builder l'application Angular
FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./
#RUN npm install
RUN npm cache clean --force && npm install

COPY . .
RUN npm run build

### STAGE 2: ###
FROM nginx:1.17.1-alpine
##COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /app/dist/raketafront /usr/share/nginx/html

##/usr/share/nginx/html/assets/" failed (13: Permission denied)
##COPY /chemin/local/vers/assets /usr/share/nginx/html/assets
RUN chmod -R 755 /usr/share/nginx/html/assets
EXPOSE 80
