FROM node:18

# Update node.js
RUN npm update -g

# Install angular cli
RUN npm install -g @angular/cli

# Install angular devkit
RUN npm install -g @angular-devkit/schematics-cli

# Setting Container
WORKDIR /repo

# COMMAND
ADD docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
