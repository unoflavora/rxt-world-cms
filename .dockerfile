FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
ENV NODE_ENV=development
RUN npm install 
RUN npm i sharp --platform=linuxmusl
COPY . .
RUN npm run build

FROM builder as runtime
RUN apk update && apk add curl
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
WORKDIR /usr/app
COPY package.json  ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3001

RUN cd /usr/app
ENTRYPOINT [ "/bin/sh", "-c" ]
CMD ["npm run serve"]