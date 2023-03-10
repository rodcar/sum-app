FROM nginx:1.17.1-alpine
EXPOSE 80
COPY /dist/sum-app /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf