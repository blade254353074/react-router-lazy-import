FROM nginx:alpine

COPY nginx    /etc/nginx/
COPY build    /usr/share/nginx/html/
