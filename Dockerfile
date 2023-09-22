FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --ignore-scripts

COPY . .

RUN npm run build --prod

FROM nginx:1.25.1-alpine

COPY --from=builder /usr/src/app/dist/escaperoomclient/ /usr/share/nginx/html

# When the container starts, replace the env.js with values from environment variables
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/app-config.template.json > /usr/share/nginx/html/assets/app-config.json && exec nginx -g 'daemon off;'"]
