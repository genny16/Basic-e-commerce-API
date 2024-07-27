# Basic-e-commerce-API

This project is a basic e-commerce API built with Node.js, Express, Mongoose, and MongoDB. It provides various endpoints to manage products, users, and orders for an e-commerce platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Contributing](#contributing)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone git@github.com:genny16/Basic-e-commerce-API.git
cd Basic-e-commerce-API
npm install
```

## Usage

To run the application, use the following command:

```bash
npm start
```

By default, the server will start on http://localhost:3000

# API Endpoints

## Users

### 1. Register a new user

#### Endpoint: /api/v1/users/signup

#### Method: POST

#### Description: Creates a new user.

#### Request Body: raw (json)

```bash
{
    "name":"big smoke",
    "email" :"bigsmoke@gmail.com",
    "password":"123456789",
    "passwordConfirm":"123456789"
    }
```

#### Response:

```bash
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGZkYjJmZjE0NzRhN2RmYmRiNzFkMCIsImlhdCI6MTcyMDcwMzc5MSwiZXhwIjoxNzI4NDc5NzkxfQ.NJPPDPdsS9b7P8Lcs2fncZNnENS7HE1ixWQtoV7uy5k",
    "data": {
        "user": {
            "role": "user",
            "_id": "668fdb2ff1474a7dfbdb71d0",
            "name": "big smoke",
            "email": "bigsmoke@gmail.com"
                   }
    }
}
```

### 2. Login a user

#### Endpoint: /api/v1/users/login

#### Method: POST

#### Description: Authenticates a user and returns a token

#### Request Body: raw (json)

```bash
{
    "email":"bigsmoke@gmail.com",
    "password":"123456789"
}
```

#### Response:

```bash
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGZkYjJmZjE0NzRhN2RmYmRiNzFkMCIsImlhdCI6MTcyMDcwNDUzNywiZXhwIjoxNzI4NDgwNTM3fQ.XlSAmliyUrqSuNsQcFcDzr1swneXRZaQOeWFelz8ssk",
    "data": {
        "user": {
            "role": "user",
            "_id": "668fdb2ff1474a7dfbdb71d0",
            "name": "big smoke",
            "email": "bigsmoke@gmail.com",

        }
    }
}
```

## Products

#### to be continued ...

# Models

## User

#### to be continued ...

## Product

#### to be continued ...

## Contributing

If you would like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes.
Commit your changes (git commit -am 'Add some feature').

Push to the branch (git push origin feature-branch).

Create a new Pull Request.

## to be continued ...
