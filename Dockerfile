FROM node:lts-alpine as development
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM node:lts-alpine AS dependencies
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

FROM node:lts-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app

COPY . .
COPY --from=dependencies /src/node_modules ./node_modules

RUN npm run build


FROM node:lts-alpine AS production

# Does not know what this does
ENV NODE_ENV=production
WORKDIR /app

# Expose the port Next.js is running on
EXPOSE 3000

COPY --from=builder /src/next.config.js ./
COPY --from=builder /src/public ./public
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/package.json /src/package-lock.json ./
COPY --from=dependencies /src/node_modules ./node_modules
CMD ["npm", "start"]

