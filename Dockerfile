FROM mhart/alpine-node:12

# Release version
ENV PATH /app/node_modules/.bin:$PATH

# Updates and install dependencies
RUN apk add --update --no-cache autoconf automake build-base git

# Sets working directory and copy source
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./


# Updates npm to latest version, Install node dependencies and clears cache
RUN npm install --silent && \
    npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 8080

CMD [ "npm", "start" ]
