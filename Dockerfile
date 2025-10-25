# Static site container using NGINX (Alpine)
# Build stage not needed; we just copy static files.
FROM nginx:1.27-alpine

# Remove default config and add our own
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy site content
COPY . /usr/share/nginx/html

EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
