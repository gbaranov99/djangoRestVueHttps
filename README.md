# Combining djangoRestVueTemplate with https support

## Tools used
All tools from [djangoRestVueTemplate](https://github.com/gbaranov99/djangoRestVueTemplate)
Letsencrypt/certbot for https certificate

## Commands to run server
(add sudo to start of commands if user is not in docker group)

### For development build:
docker-compose up --build -d

### For production build:
#### Before building, run:
docker-compose -f docker-compose.prod.yml run backend python /code/manage.py migrate
docker-compose -f docker-compose.prod.yml run backend python /code/manage.py createsuperuser

docker-compose -f docker-compose.prod.yml up --build -d

## Recommendations for customization:
Update the environment variables in docker-compose files, or create .env files
Use this [tutorial](https://www.humankode.com/ssl/how-to-set-up-free-ssl-certificates-from-lets-encrypt-using-docker-and-nginx), or my [github repository](https://github.com/gbaranov99/base_website) to set up https certificates for your domain
Change website names in nginx/prod.conf to reflect your domain
