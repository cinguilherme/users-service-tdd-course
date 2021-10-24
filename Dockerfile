FROM node:16-alpine3.14

WORKDIR /app

COPY ./package.json /app

RUN npm install --prod

COPY ./dist /app

EXPOSE 8080

CMD [ "node", "./server.js" ]
