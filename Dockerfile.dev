# Используем официальный образ Node.js
FROM node:20-alpine

# Устанавливаем зависимости для Astro и работы в контейнере
RUN apk add --no-cache git

# Создаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем исходный код
COPY . .

# Запускаем dev-сервер с открытым портом
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
