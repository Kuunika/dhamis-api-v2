FROM node:14 as building
WORKDIR /usr/src/app
COPY ./backend/package.json .
RUN npm install --only=prod
COPY ./dist .

FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=building /usr/src/app/ .

ARG DB_HOST
ARG DB_PORT=1433
ARG DB_USERNAME
ARG DB_PASSWORD
ARG DB_NAME
ARG NODE_ENV=PRODUCTION

ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV DB_NAME=${DB_NAME}
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3333
CMD ["node", "main.js"]