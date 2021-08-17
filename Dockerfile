FROM node:16

COPY . .
RUN rm -rf node_modules
RUN npm install

RUN npm run build
CMD npm run start