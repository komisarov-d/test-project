FROM node:15 AS frontend

WORKDIR /usr/src/app/frontend

COPY ./frontend/package*.json ./

ENV REACT_APP_NODE_ENV=production

ENV REACT_APP_PROXY_SERVER_URL=http://backend:3000

ENV REACT_APP_API_ORIGIN_URL=/api/v1

RUN npm install

# Bundle app source
COPY ./frontend .

RUN node --max_old_space_size=4096 ./node_modules/.bin/react-scripts build

FROM frontend as backend

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend .

RUN npm run build

COPY --from=frontend /usr/src/app/frontend/build ./build/public

EXPOSE 3000

CMD [ "npm", "run", "docker:prod"]

