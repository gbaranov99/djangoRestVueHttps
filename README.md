# Combining djangoRestVueTemplate with https support

## Tools used
All tools from djangoRestVueTemplate
Some modifications to nginx to better handle website support
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
Configure https support and website routing with NGINX
