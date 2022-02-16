# CompaniesAssignment

This is a fullstack application which enables to read, create and update a list of companies, which have information about company name, country, email and beneficial owners.

## Setup

In order to run the service with docker, you should navigate to the server, and then run docker

```shell
$ cd server/
$ docker compose up dev
```

Navigate to the client, install the packaes and start the application

```
$ cd client/
$ npm install
$ npm start
```
Client should start on port 3000

## API Documentation

Example of a GET request for receiving all companies

```
curl -X GET http://localhost:5000/companies
```

- Response:

```
[
    {
        "_id": "620cd62d51673fd47b69c701",
        "name": "Rema1000",
        "country": "Denmark",
        "email": "rema1000@rema.dk",
        "owners": [
            {
                "name": "Anders Larsen",
                "securityNumber": "226269483"
            }
        ],
        "__v": 0
    },
    {
        "_id": "620cd67551673fd47b69c704",
        "name": "CTG",
        "country": "Denmark",
        "email": "ctg@gmail.com",
        "owners": [
            {
                "name": "Alex Rusu",
                "securityNumber": "5616126"
            },
            {
                "name": "Matei Popescu",
                "securityNumber": "6160536"
            }
        ],
        "__v": 0
    },
    {
        "_id": "620cd6c251673fd47b69c70a",
        "name": "Dopo Poco",
        "country": "Romania",
        "email": "dopopoco@gmail.com",
        "owners": [
            {
                "name": "Cristian Grama",
                "securityNumber": "53434584"
            }
        ],
        "__v": 0
    }
]
```


Example of a GET request for a specific company

```
curl -X GET http://localhost:5000/companies/620cd6c251673fd47b69c70a
```

- Response

```
{
    "_id": "620cd6c251673fd47b69c70a",
    "name": "Dopo Poco",
    "country": "Romania",
    "email": "dopopoco@gmail.com",
    "owners": [
        {
            "name": "Cristian Grama",
            "securityNumber": "53434584"
        }
    ],
    "__v": 0
}
```

Example of a POST request to add a new company

```
curl -X POST http://localhost:5000/companies

-H "Content-Type: application/json" \
-d '{
        "name": "Frankie's",
        "country": "United Kindom",
        "email": "hm@la.com",
        "owners": [{
        "name": "Mike Wilson",
        "securityNumber": "2311882267"}]
      }

```

Example of a PUT request to update information about a company

```
curl -X PUT http://localhost:5000/companies/620cd6c251673fd47b69c70a

-H "Content-Type: application/json" \
-d '{
        "email": "dopopoco1@gmail.com",
      }
```

## Build With

- NodeJS - back-end JavaScript runtime environment
- NestJS - NodeJS framework for building server-side applications
- MongoDB - NoSQL database
- React - JavaScript library for building user interfaces
