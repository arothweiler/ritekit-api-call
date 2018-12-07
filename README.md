# Ritekit Auto Hashtag

> Simple Page Application for creating auto hashtags with RiteKit API

## Project Setup

```bash
# create an env file using the client id from ritekit
touch .env

# add the necessary client id | credentials found here => https://ritekit.com/developer/dashboard/

echo "CLIENT_ID=2d07f14d3966adb6433c8fcad3ee8c93c45ba3d35cc2" >> .env   


# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```

## Workarounds


In order to achieve this, I deployed a heroku app NodeJS reverse proxy which adds CORS headers to the proxied request.

More Info here => https://github.com/Rob--W/cors-anywhere

Heroku App => https://any-cors.herokuapp.com/


# ritekit
