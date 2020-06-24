FROM nginx:alpine
COPY dist/urlshort /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80