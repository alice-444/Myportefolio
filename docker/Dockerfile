FROM node:20.18-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY ../ .

USER node

EXPOSE 8000

CMD ["npm", "run", "dev"]