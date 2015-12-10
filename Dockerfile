FROM nginx
ENV www /usr/share/nginx/html/
COPY ./index.html $www
COPY dist/ $www/dist
