# Combining djangoRestVueTemplate with https support

## Tools used
All tools from [djangoRestVueTemplate](https://github.com/gbaranov99/djangoRestVueTemplate)

Letsencrypt/certbot for https certificate

## Commands to run server
(add sudo to start of commands if user is not in docker group)

### For development build:
docker-compose up --build -d

Note: only works if <yarn install> is run in frontend folder

Also requires changing domin name to http://localip in frontend/src/store/services/api.js

### For production build:
#### Before building for the first time, run:

docker-compose -f docker-compose.prod.yml run backend python /code/manage.py migrate

#### After that, only running this command is required:
docker-compose -f docker-compose.prod.yml up --build -d

#### This command brings containers down:
docker-compose down

## Recommendations for customization:
Update the environment variables in docker-compose files, or create .env files

Use this [tutorial](https://www.humankode.com/ssl/how-to-set-up-free-ssl-certificates-from-lets-encrypt-using-docker-and-nginx), or my [github repository](https://github.com/gbaranov99/base_website) to set up https certificates for your domain

Change website names in nginx/prod.conf to reflect your domain
