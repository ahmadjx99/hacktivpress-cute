# hacktivpress-cute

Simple Application about simple blogging.

You can register or signup : localhost:8080/registration

After register and login, you can create article : localhost:8080/create

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

| Method | URL      | Description |
|--------|----------|-------------|
| POST   | /login   | log in      |
| POST   | /signup  | Create user |
| POST   | /signin  | sign in     |

| Method | URL                          | Description          |
|--------|------------------------------|----------------------|
| GET    | /api/articles                | Get all articles     |
| GET    | /api/articles/:id            | Get article by id    |
| POST   | /api/articles                | Create article       |
| PUT    | /api/articles/:id            | Update article by id |
| DELETE | /api/articles/:id            | Delete article by id |
| GET    | /api/articles/:some/:search  | searching something  |
