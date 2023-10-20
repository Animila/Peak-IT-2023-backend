# Этап 1: Установка зависимостей и выполнение миграции
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Замените 'npm migrate' на команду, которая выполняет миграцию
# RUN npx prisma migrate dev

# Этап 2: Запуск сервера
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node","server.js"]