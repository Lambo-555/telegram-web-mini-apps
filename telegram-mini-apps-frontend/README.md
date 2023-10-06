# Telegram MINI-APPs
Project combine several simple application what can be run inside telegram app

Main idea: you can combine different but logic-grouped bots in one super-app and call by different command.
All will work at one server.

Telegram apps its sites but work like in inframe and have additional API methods

TODO add schema png

## Stack for backend:
- NestJS (TypeScript)
- nestjs-telegraf (TypeScript)

## BACKEND Manage 
> installation
```bash
npm ci
```

> build
```bash
npm run build
```

> production start
```bash
npm run start
```

> development start
```bash
npm run start:dev
```

## Stack for frontend:
- ReactJS (TypeScript)
- react-bootstrap (CSS components and styles)
- telegram-webapps-types (for development only)


## FRONTEND Manage 
> installation
```bash
npm ci
```
> build
```bash
npm run build
```
> start
```bash
npm run start
```

## Telegram Manage
- create new own bot by telegram official @BotFather 
- get token
- paste an backend module.ts

## Deploy
To start your application you need to run backend and frontend both on server.
- clone repository by command:
``` bash
git clone ...
```
- manage it to build stage
- run backend first
- run frontend


# List of frontend applications

### TODO App
You can store and control list of **to do** things 

### Random-Movie App
Choose random movie to watch today (do not forget to add it into TODO list)

### Random-Movie App

### GameChanger App
Use your location to place the game bosses

### StayRecord App
Bit the record of the one place standing by your geo-location

### MassMatter

### GeoSyncMusic

