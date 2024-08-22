FROM node:20-alpine
WORKDIR /Frontend
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]