FROM node:21-alpine3.18

# Dependencies
COPY package.json API/package.json

# Working directory
WORKDIR /API

# Install dependencies
RUN npm install

# Copy all files
COPY . /API

EXPOSE 3000

ENTRYPOINT ["npm", "start"]