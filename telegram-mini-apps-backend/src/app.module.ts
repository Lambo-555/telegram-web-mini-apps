import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { session } from 'telegraf';
import AppUpdate from './app.update';

@Module({
	imports: [
		TelegrafModule.forRoot({
			token: '6494547225:AAFnffqUhWhR-BrnNwk6nxH56HeLoqWNU58', // get token from your new bot by using -> https://t.me/BotFather
			middlewares: [session()], // in memory only, session user data can be lost on server restart
		})
	],
	providers: [AppUpdate],

})
export class AppModule { }
