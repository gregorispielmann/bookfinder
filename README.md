<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./web/src/assets/logohorizontal.svg" alt="Project logo"></a>
</p>

<h3 align="center">BookFinder</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/gregorispielmann/bookfinder.svg)](https://github.com/gregorispielmann/bookfinder/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/gregorispielmann/bookfinder.svg)](https://github.com/gregorispielmann/bookfinder/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A React.js and Express.js project made using GoogleBooks API.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This is a study project build using React.js with some libs and a API with Node.js, Express.js and other libs.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
You need yarn or npm to run this application
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone this repo using the address https://github.com/gregorispielmann/bookfinder.git

### Running em Dev Mode

### Creating your AppSecret (.env)

You will find inside server folder a file with .env.example name, you need to rename that to .env and inside that put your own APP_SECRET Key.

```

APP_SECRET=yourscretkey

```

### Backend (Server)

### Install dependencies, run Knex migrations and Seeds, start the server with nodemon using Yarn or Npm

Inside the clone folder run the commands below.

```
YARN
$ cd server && yarn && npx knex migrate:latest && npx knex seed:run && yarn server

NPM
$ cd server && npm install && npx knex migrate:latest && npx knex seed:run && npm run server

```

### Frontend (Web)

### Install dependencies and start the web using Yarn or Npm

Inside the clone folder run the commands below.

```
YARN
$ cd web && yarn && yarn start

NPM
$ cd web && npm install && npm run start

```

With the steps above you will be ready to test the application.

WEB > http://localhost:3000
SERVER > http://localhost:4000

## 🎈 Usage <a name="usage"></a>

To use the system you will need the login email and password.

When you run the Knex seed you will put a demo admin user with this data:

Email: admin@bookfinder.com
Password: 123456

You just need this infos to login in the web application.

## ⛏️ Built Using <a name = "built_using"></a>

- [ReactJS](https://reactjs.org/) - Web JS Library
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/) - Server Environment
- [Knex](http://knexjs.org/) - SQL Query Builder
- [SQLite3](https://www.sqlite.org/) - Local Database
- [axios](https://github.com/axios/axios) - HTTP Client
- [Styled Components](https://nodejs.org/en/) - CSS in JS
- and others

## ✍️ Authors <a name = "authors"></a>

- [@gregorispielmann](https://github.com/gregorispilelmann)

## 🎉 TODOS, Facilidades, dificuldades e horas <a name = "acknowledgement"></a>

TODOS
- Acrescentar Redux e inserir informações que necessitem ser compartilhadas entre componentes tais como quantidade de favoritos para o header

Facilidades
- Criação do frontend React.js em geral
- Criação do backend utilizando Node.js e Express.js

Dificuldades
- Uso da API do Google (retornos confusos)

Horas trabalhas (estimadas) - 16h
