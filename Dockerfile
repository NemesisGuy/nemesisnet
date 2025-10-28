# ===============================
# Static site container using NGINX (Alpine)
# ===============================
FROM nginx:1.27-alpine

# Remove default NGINX config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all HTML files individually
COPY index.html /usr/share/nginx/html/index.html
COPY nemesis-mode-demo.html /usr/share/nginx/html/nemesis-mode-demo.html
COPY nemesis_net_brand_guide_html_version.html /usr/share/nginx/html/nemesis_net_brand_guide_html_version.html

# Copy all CSS files individually
COPY aurora-mode.css /usr/share/nginx/html/aurora-mode.css
COPY nemesis-mode.css /usr/share/nginx/html/nemesis-mode.css

# Copy the assets folder recursively
COPY assets/ /usr/share/nginx/html/assets/

# Expose HTTP port
EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
