FROM node:alpine

# Set the application root.
ENV APP_ROOT /app
WORKDIR /app

# Copy files.
ADD . ${APP_ROOT}

# Login to CLI.
# Usage: https://www.npmjs.com/package/npm-cli-login#usage
RUN npx npm-cli-login

# Install dependencies.
RUN yarn install

# Clean cache.
RUN yarn cache clean

# Build the application.
RUN yarn build

# Expose PORT.
EXPOSE 8080

# Start the application.
CMD [ "yarn", "start" ]
