FROM node:16.14-slim as Build

WORKDIR /app
COPY . .

RUN npm i

EXPOSE 3000
CMD [ "npm","run","start"]