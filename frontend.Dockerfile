FROM node:22-alpine AS builder

WORKDIR /app

COPY ./frontend/package.json ./frontend/package-lock.json ./

RUN npm install

COPY ./frontend .

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/out ./

EXPOSE 3000

CMD ["node", "start", "/app"]
