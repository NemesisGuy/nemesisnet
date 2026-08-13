#!/bin/bash
set -e

IMAGE="nemesisguy/nemesisnet:dev"

echo "==> Building Nuxt app..."
npm run build

echo "==> Building Docker image..."
wsl docker build --no-cache -t $IMAGE .

echo "==> Pushing to Docker Hub..."
wsl docker push $IMAGE

echo "==> Cleaning up old local images..."
wsl docker image prune -f

echo "==> Done. Deploy to VPS:"
echo "    docker pull $IMAGE"
echo "    docker stop nemesisnet && docker rm nemesisnet"
echo "    docker run -d --name nemesisnet -p 80:3000 $IMAGE"
