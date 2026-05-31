FROM oven/bun:1-alpine AS dependencies
WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile


FROM oven/bun:1-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY package.json bun.lockb ./

COPY . .

RUN bun run build


FROM oven/bun:1-alpine AS production
ENV NODE_ENV=production
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

COPY package.json bun.lockb ./

EXPOSE 3000

CMD ["bun", "run", "start"]
