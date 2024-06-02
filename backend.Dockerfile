FROM nginx:alpine AS builder

WORKDIR /app

COPY ./backend/package.json ./backend/package-lock.json ./

RUN apk add --no-cache php8 php8-mbstring php8-xml php8-fpm supervisor

COPY ./backend .

COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN composer install --no-dev

EXPOSE 80

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
