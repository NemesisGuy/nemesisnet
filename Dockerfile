FROM nginx:1.27-alpine

# Copy Nuxt static output to nginx
COPY .output/public/ /usr/share/nginx/html/

# Copy nginx config
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
