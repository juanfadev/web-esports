# Stage 1
FROM node:11.10.0-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.15.8-alpine

COPY --from=node /usr/src/app/dist/web-esports /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
