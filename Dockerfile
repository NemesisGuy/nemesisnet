FROM node:20-alpine

COPY .output/ /app/
WORKDIR /app

EXPOSE 3000
CMD ["node", "server/index.mjs"]