FROM node:22-alpine AS dependencies
ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


FROM node:22-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY package.json package-lock.json ./

COPY . .

RUN npm run build


FROM node:22-alpine AS production
ENV NODE_ENV=production
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

COPY package.json package-lock.json ./

EXPOSE 3000

CMD ["npm", "start"]