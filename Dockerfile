FROM nginx:alpine
COPY dist/urlshort /usr/share/nginx/html
EXPOSE 80