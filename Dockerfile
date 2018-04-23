FROM madnificent/ember:3.0.0 as ember

MAINTAINER Esteban Sastre <esteban.sastre@tenforce.com>
MAINTAINER Aad Versteden <madnificent@gmail.com>

COPY . /app
# Let's remove the .git in case it's linking to outside the container
RUN rm -rf .git && git init
RUN if [ -f "/app/bower.json" ]; then export GIT_DIR=/app; bower install; fi
RUN npm install
RUN npm rebuild node-sass
RUN ember build

FROM nginx:1
RUN ln -s /usr/share/nginx/html /app
COPY --from=ember /app/dist /app
