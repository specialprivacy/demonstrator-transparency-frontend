FROM node:4 AS build
LABEL authors="Cecile Tonglet <cecile.tonglet@tenforce.com>"
ARG env=development

RUN npm -q set progress=false

RUN mkdir /src
WORKDIR /src

ADD package.json /src/
RUN npm install -q

ENV PATH=/src/node_modules/.bin:$PATH

COPY . /src/
RUN ember build --environment=$env


FROM semtech/ember-proxy-service:latest
COPY --from=build /src/dist /app
