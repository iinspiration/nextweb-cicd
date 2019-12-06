FROM node:8.16.0-alpine

RUN apk update \
  && apk add tzdata curl git \
  && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
  && echo "Asia/Bangkok" > /etc/timezone \
  && apk del tzdata

WORKDIR /home/node/nextweb

COPY package.json ./
COPY ./.env ./.env

RUN yarn install

COPY . .

USER root
RUN chown -R node:node src

USER node

RUN yarn run build

EXPOSE 80
EXPOSE 3001

CMD ["yarn", "start"]
