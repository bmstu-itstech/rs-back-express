# rs-back-express

## Описание проекта

Проект представляет собой серверную часть для сайта "Центра молодёжной робототехники", который помогает продвигать и поддерживать положительный имидж Центра, привлекать новых пользователей и информировать их о мероприятиях, новостях и других активностях, проходящих в Центре.

## Установка и запуск

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/bmstu-itstech/rs-back-express.git
   cd rs-back-express
   ```

2. **Установите зависимости**:
   ```bash
   npm i
   ```

3. **Создайте сборку**:
   ```bash
   npm run build
   ```

4. **Установите базу данных**:
   ```bash
   curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
   echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
   sudo apt update
   sudo apt install mongodb-org
   ```

5. **Запустите базу данных и сервер**:
   ```bash
   sudo systemctl start mongod
   npm start
   ```

## Структура проекта

- **`src/`** – Корневая директория исходного кода.
  - **`controllers/`** – Логика обработки запросов и ответов.
  - **`helpers/`** – Вспомогательные функции.
  - **`middlewares/`** – Промежуточные обработчики.
  - **`models/`** – Определения моделей данных.
  - **`routers/`** – Маршруты API.
  - **`swagger/`** – Документация Swagger.
  - **`types/`** – Типы данных.
  - **`services/`** – Бизнес-логика приложения.
  - **`utils/`** – Утилиты и вспомогательные функции.
  - **`validators/`** – Валидаторы данных.
  - **`index.ts`** – Точка входа в приложение.

## Лицензия

Этот проект распространяется под лицензией [MIT](LICENSE). Пожалуйста, ознакомьтесь с файлом лицензии для получения дополнительной информации.

---

```txt
   ______________  ______        __ 
  /  _/_  __/ __/ /_  __/__ ____/ / 
 _/ /  / / _\ \    / / / -_) __/ _ \
/___/ /_/ /___/   /_/  \__/\__/_//_/
                                                                 
```