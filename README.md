# telegram-web-mini-app
The APP allow to get random movie inside Telegram

# Why to choose this stack for develop Telegram App
- TypeScript, all type advantages for fast and safe develop
- Popular frameworks, easy to find help and advises
- Easy to run and debug, no need to additional actions
- Intuitive decorators, improve readability

# About Telegram web mini apps
Telegram apps it's sites but work like in inframe and have additional web-api methods.
So we need frontend app and backend server for get updates from Telegram bot.

# Instructions
[FrontEnd README](./telegram-mini-apps-frontend/README.md)

[BackEnd README](./telegram-mini-apps-backend/README.md)

## Development
You can develop backend and frontend on one devise.

Start backend first. It must run NOT on port 3000, may be 3001, 3002 ect.

Start frontend. It will start on 3000 port. But for now its now available from ethernet. So we can solve it by **ngrok**:
- visit ***https://ngrok.com/***, download, install and register
- call **ngrok http 3000**
- you will receive Forwarding address like this https://396c-78-37-196-202.ngrok-free.app
- now anyone can access your frontend, so use the address for development! WARNING! Address will changed then ngrok will be restarted

You also can use https://vercel.com/ for fast frontend deploy 

