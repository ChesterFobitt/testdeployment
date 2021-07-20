FROM node:12.8
WORKDIR /
ADD . /app
RUN npm install
EXPOSE 4000
CMD npm start