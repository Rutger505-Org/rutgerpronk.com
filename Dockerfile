FROM node:lts-alpine as development
WORKDIR /src

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM node:lts-alpine AS dependencies
WORKDIR /src

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

FROM node:lts-alpine AS builder
ENV NODE_ENV=production
WORKDIR /src

COPY . .
COPY --from=dependencies /src/node_modules ./node_modules

RUN npm run build


FROM node:lts-alpine AS production

# Does not know what this does
ENV NODE_ENV=production
WORKDIR /src

# Expose the port Next.js is running on
EXPOSE 3000

COPY --chown=node --from=builder /src/next.config.js ./
COPY --chown=node --from=builder /src/public ./public
COPY --chown=node --from=builder /src/.next ./.next
COPY --chown=node --from=builder /src/package.json /src/package-lock.json ./
COPY --chown=node --from=dependencies /src/node_modules ./node_modules
CMD ["npm", "start"]

