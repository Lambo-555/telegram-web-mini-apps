# telegram-web-mini-apps

## Stack for backend:
- [NestJS (TypeScript)](https://nestjs.com/)
- No database is used

Libraries:
- [nestjs-telegraf (TypeScript)](https://github.com/evilsprut/nestjs-telegraf)

## BACKEND Manage 
here we use **npm**, but you can use **yarn** or eny other package manager what you prefer

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

## How to make it work?
First of all we need to get updates from Telegram.

We need to create a new bot by @BotFather official Telegram bot, you can find it inside Telegram contact search.

So find @BotFather and write message ***/newbot*** or press **menu button** and find same menu item.

After creating a new bot we will receive your new bot http token like this **6494547225:AAFnffqUhWhR-BrnNwk6nxH56HeLoqWNU56**

Place the token to the ***app.module.ts*** file and save the file

So now we need to subscribe to the updates of the bot. I call it bot-activation. Create an next request based on your token and just open them on browser: 

1. https://api.telegram.org/bot( PLACE YOUR TOKEN HERE )/getMe

2. https://api.telegram.org/bot( PLACE YOUR TOKEN HERE )/getUpdates

If the returned messages contains **OK** keyword it is all work well

So now you can get updates from bot
