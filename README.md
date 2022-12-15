# Welcome to the Trybesmith project repository!!

## Introduction

_API_ developed to manage a fictional store of medieval items, using _TypeScript_ and following _REST principles_.

Among the features, you can register a new _user_, login to get the _token_ that is needed to manipulate the database, list _products_ and add new _products_, list _orders_ and add new _orders_.

Basically, it is possible to perform the basic operations that can be done on a given database: **C**reation, **R**eading, **U**pdate and **D**eletion (**CRUD**) in the _MySQL_ database.

---

## Installation

<details>
<summary><strong>Installation instructions</strong></summary>

### Clone the repository

```bash
git clone git@github.com:lucas-da-silva/project-trybesmith.git
```

### Enter the repository

```bash
cd project-trybesmith
```

### Climbing the containers (docker is needed)

```bash
docker-compose up -d
```

### Entering the Node.js container

```bash
docker exec -it trybesmith bash
```

### Install dependencies

```bash
npm install
```

### Run the mysql script [**Trybesmith.sql**](./Trybesmith.sql)

Copy and paste into an SQL tab or open the script and run it.

> It will create the database, the tables and insert the values.

### Run the application

```bash
npm start
```

> You can use [Thunder Client](https://www.thunderclient.com/) or [Insomnia](https://insomnia.rest/) (or whatever) to check API routes.

### To stop containers

```bash
docker-compose down
```

</details>

---

## Aplication

As the project was developed using _TypeScript_, functions, objects and function parameters were typed, ensuring greater readability and functionality of the application.

The **MSC** (**M**odel, **S**ervice, **C**ontroller) software architecture was used to organize the project structure.

The **[jwt](https://jwt.io/)** library was also used to generate a token, which is necessary to have complete access to the application.

There are multiple validations to perform a request, from `middlewares` and functions dedicated to validations, so pay attention to what is expected when making a request.

### Products routes

- `GET /products`: lists all `products` in the database;

- `POST /products`: register a new `product`;
<details>
    <summary>The request body should follow the format below</summary>

```JSON
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

</details>

### Users routes

- `POST /users`: adds a new `user` to the database and returns a `token`;

<details>
    <summary>The request body should follow the format below</summary>

```JSON
{
  "username": "MAX",
  "vocation": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

</details>

### Login routes

- `POST /login`: with **valid** _username_ and _password_ (registered in the database) returns a `token`;

<details>
    <summary>The request body should follow the format below</summary>

```JSON
  {
    "username": "string",
    "password": "string"
  }
```

</details>

### Orders routes

- `GET /orders`: lists all `orders` in the database;

- `POST /orders`: adds a new `order` to the database and updates the `products` with the created `order`;

> To register new orders, it is necessary to have a `token` in the `Authorization` key in the request.

<details>
    <summary>The request body should follow the format below</summary>

```JSON
  {
    "productsIds": [1, 2]
  }
```

- The values that are in the array will be inserted in the products (`table products`) in the `order_id` column;

</details>

---

## Technologies used

<p>
<a href='https://www.typescriptlang.org/'>
  <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' alt='TypeScript' />
</a>
<a href='https://expressjs.com/'>
  <img src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' alt='Express' />
</a>
<a href='https://www.mysql.com/'>
  <img src='https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' alt='MySQL' />
</a>
<a href='https://nodejs.org/en/'>
  <img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' alt='Node.js' />
</a>
<a href='https://jwt.io/'>
  <img src='https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens' alt='JWT/JSON Web Token' />
</a>
<a href='https://www.docker.com/'>
  <img src='https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' alt='Docker' />
</a>
</p>

- [nodemon](https://nodemon.io/)
- [ts-node](https://www.npmjs.com/package/ts-node)
