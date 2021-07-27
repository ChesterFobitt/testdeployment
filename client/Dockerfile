# For client

FROM node:12-alpine as build

WORKDIR /app
COPY . /app
RUN npm install --only=prod
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
