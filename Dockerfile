FROM madnificent/ember:2.18.0 as ember

MAINTAINER Esteban Sastre <esteban.sastre@tenforce.com>
MAINTAINER Aad Versteden <madnificent@gmail.com>

COPY . /app
ENV GIT_DIR=/app
RUN bower install
RUN npm install
RUN npm rebuild node-sass
RUN ember build

FROM nginx:1
RUN ln -s /usr/share/nginx/html /app
COPY --from=ember /app/dist /app
