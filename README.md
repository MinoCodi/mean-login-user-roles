# MEAN-Stack: Authorization + Login + User + UserRoles

Base project with authorization, login and user roles.

## Posibilities/Features

* login/logout
* user roles (Admin, User)
* server side user handling

## Used technologies

### UI

* Angular 7 (with Angluar CLI 7.0.3)
* LESS

### Server

* Node.js & expressjs for server implementation
* MongoDB
* mongoose
* JWT (JSON Web Token)

## Config (Server/MongoDB)

Use `backend/config/config.json` to configure database credentials and the jwt (json web token).

```
{
    "secret": "",

    "mongodb": {
        "mongoConnection": "mongodb://localhost:27017/",
        "host": "localhost",
        "port": "27017",
        "db": "userlogin",
        "user": "",
        "pw": ""
    }
}
```

## Build with special base href

`ng build --base-href /folder-name/ --prod`

More information about `ng build`: https://github.com/angular/angular-cli/wiki/build

## Unit tests

Tests will follow later
