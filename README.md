## Description

Simple To-Do list app to learn modern Javascript
 - API: NestJS

## Installation

Create a `.env` file in the project root with these settings for development:
```
DB_HOST=postgres
DB_PORT=5432
DB_NAME=todo
DB_USER=user
DB_PASS=pass
```

Then build and install:
```bash
$ make build
$ make install
```

## Running the app

```bash
$ make dev
```

API is available at http://localhost:3000

## Development

Generate new database migrations: `yarn run migration:generate`

