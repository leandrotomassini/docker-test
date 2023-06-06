
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn --production

FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn build


FROM node:19-alpine3.15 as production
EXPOSE 3000
WORKDIR /app
COPY --from=builder . .
RUN yarn start