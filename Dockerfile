# ===============================
# Static site container using NGINX (Alpine)
# ===============================
FROM nginx:1.27-alpine

# Remove default NGINX config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom NGINX config and the authoring source directly
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY src/ /usr/share/nginx/html/

# Optionally ship the repo README for reference inside the container
COPY README.md /usr/share/nginx/html/README.md

# Expose HTTP port
EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
