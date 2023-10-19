## API Помощник Игры Азии

> Примечание:
> Данный проект был разработан в рамках Ежегодного осеннего хакатона "Peak IT" проходивший с 18 по 20 октября 2023 года.

## Описание

API представлен в виде микросервисной архитектуре, внутри которой...

## Стек технологий

![Express.js](https://img.shields.io/badge/express.js-%23232F3E.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/prisma-%230B265F.svg?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white)<br>

## Установка и запуск

Для установки проекта требуется иметь [Git](https://git-scm.com), [Docker](https://www.docker.com/).

```bash
git clone https://github.com/Animila/Peak-IT-2023-backend.git
cd Peak-IT-2023-backend
```

После чего запускаем проект:

```
docker-compose up -d --build
```

После чего заходим к контейнеры [сервис].api и запускаем файл миграции:

```
docker exec -it [сервис].api sh
cd /database
npx prisma generate
npx prisma migrate dev
```

## Авторы

> Дизайнеры: Самарбек Нурайым

> Разработчик: Христофоров Илья

> Менеджер: Неробов Максим

## Лицензия

Данный проект разрабатывается в рамках хакатона. Все материалы, за исключением лицензированных изображений и материалов компаний, распространяются по GNU лицензии
