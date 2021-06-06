# syntax=docker/dockerfile:1

FROM node:14

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm i --production

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]