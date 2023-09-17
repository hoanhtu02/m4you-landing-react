FROM node:18.17.0-alpine
RUN npm install -g npm@10.1.0
RUN mkdir -p /var/www/web-vimo
WORKDIR /var/www/web-vimo
ADD . /var/www/web-vimo
RUN npm cache clean --force && rm -rf node_modules && npm install
CMD npm run build && npm run start