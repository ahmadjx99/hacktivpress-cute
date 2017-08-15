# hacktivpress-cute

Simple Application about simple blogging

## Build Setup

``` bash
# running client-side
npm install
npm run dev

# running server-side
npm install
node app.js
```

## REST API

| Method | URL      | Description   |
|--------|----------|---------------|
| GET    | /users   | Get all users |
| POST   | /signup  | Create user   |
| POST   | /signin  | sign in       |

| Method | URL           | Description          |
|--------|---------------|----------------------|
| GET    | /api/articles | Get all articles     |
| GET    | /articles/:id | Get article by id    |
| POST   | /articles     | Create article       |
| PUT    | /article/:id  | Update article by id |
| DELETE | /article/:id  | Delete article by id |
