FROM node:15 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

ENV PATH="/usr/src/app/node_modules/.bin:$PATH"

ENV REACT_APP_NODE_ENV=development

ENV REACT_APP_PROXY_SERVER_URL=http://backend:3003

ENV REACT_APP_API_ORIGIN_URL=/api/v1

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]