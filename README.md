# NodeJS GraphQL API

## This project uses:

#### Main Dependencies:
- [NodeJS](https://nodejs.org/en/)
- [Express](http://expressjs.com)
- [GraphQL](http://graphql.org)
- [Mongoose](http://mongoosejs.com)

#### Dev dependencies:
- [Babel](https://babeljs.io)
- [ESLint](https://eslint.org)
- [Nodemon](https://nodemon.io)


## How to use

First, clone the repo and install the dependencies:

```bash
npm install
```

Then, start the server:

```bash
npm start
```

The GraphQL client will be hosted on http://localhost:8000/graphql


## Folder Structure
```bash

├── .eslintrc.js
├── .gitignore
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── server.js
└── source
    ├── helpers
    ├── models
    ├── config
    │   ├── eslint # Lint config file
    │   │   ├── rules
    │   │   └── index.js
    │   └── index.json # App config file
    └── graphql
        ├── mutations
        ├── queries
        ├── types
        └── index.js
```

## About

- This project aims to improve my skills and learn more about some technologies such as GraphQL.

- Todo list:
```
[x] 001: Express Server
[x] 002: MongoDB
[x] 003: GraphQL
[ ] 004: Tests
  [ ] 001: Unit testing
  [ ] 002: Integration testing
  [ ] 003: Testing resolvers
[ ] 005: More models, queries and mutations (complexity)
[ ] 006: Auth
[ ] 007: Deploy
  [ ] 001: CI
  [ ] 002: Docker
  [ ] 003: Heroku
```


- License: **MIT** License © [Daniel Ávila](http://github.com/danielavilas).
```
