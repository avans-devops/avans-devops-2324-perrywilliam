FROM node:20-alpine as builder

# Copy package list
COPY package.json API/package.json
COPY package-lock.json API/package-lock.json

# Install Packages
WORKDIR /API
RUN ["npm", "ci"]

# Open port 3000
EXPOSE 3000

# Copy source code to the app
COPY . /API

# Default command to run when container starts
CMD ["npm", "start"]