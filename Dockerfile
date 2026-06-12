FROM node:20-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --chown=appuser:appgroup .output/ /app/
WORKDIR /app

USER appuser

EXPOSE 3000
CMD ["node", "server/index.mjs"]