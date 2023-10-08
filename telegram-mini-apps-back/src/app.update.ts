import { Injectable } from '@nestjs/common';
import {
	Update,
	Command,
	Ctx,
	Use,
	Next,
	Action,
	Start,
} from 'nestjs-telegraf';
import { Markup, Scenes } from 'telegraf';
import { NextFunction } from 'express';

// not best type declaration, WIP
export interface TelegrafContext extends Scenes.SceneContext {
	update: any;
	match: any;
}

/**
 * Main class for get updates from Telegram
 */
@Update()
@Injectable()
export default class AppUpdate {
	// TODO place your frontend App address here!
	private webAppUrl = 'https://telegram-web-mini-apps.vercel.app/';

	/**
	 * "@Use()" - Process all type of messages
	 * @param ctx Telegram Context (info about chat, user ect)
	 * @param next - method to continue logic if you want to process one message more then one time
	 */
	@Use()
	async onUse(@Ctx() ctx: TelegrafContext, @Next() next: NextFunction) {
		try {
			// if user send data from frontend we will catch it
			const webAppData = ctx?.webAppData;
			if (webAppData) {
				console.log('FROM FRONTEND: ', JSON.stringify(webAppData));
			}

			// get data from message
			const userMessageId = ctx?.update?.message?.message_id; // id of the user current message
			const userMessageChatId = ctx?.update?.message?.chat.id; // id of the chat where user send messages
			const userMessageText = ctx?.update?.message?.text; // text of the user message
			const messageForChat = `New message. ID: ${userMessageId}, CHAT: ${userMessageChatId}, TEXT: ${userMessageText}.
It was intercepted by "@Use()" decorator, time: ${new Date(Date.now()).toUTCString()} ${Date.now()}ms`;
			console.log(messageForChat);
			await ctx.reply(messageForChat);
			next(); // we do not stop here and continue process current message by next handlers
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * Handle "/start" command
	 * This decorator its syntax sugar because its just telegram "command",
	 * but with its own name
	 * We can call "onStart" method by one or several decorators
	 */
	@Start() // "start" command
	@Command("/start") // same logic as "@Start()"" decorator, will also handle the command
	async onStart(@Ctx() ctx: TelegrafContext) {
		await ctx.reply(`Ways to open webApp:
- /keyboard (press!) - keyboard buttons
- /inline (press!) - inline buttons
- menu button (press "menu")

Work in progress:
- inline mode
- direct link
- attachment menu`);
		return;
	}

	/**
	* WE HAVE SIX WAYS OF LAUNCHING TELEGRAM WEB MINI APPS: 
	* - keyboard button
	* - inline button
	* - bot menu button 
	
	* Work in progress:
	* - inline mode
	* - direct link 
	* - attachment menu
	 */

	/**
	 * -------------------
	 * METHOD 1 FOR OPEN TELEGRAM WEB MINI APP
	 * -------------------
	 * by keyboard button
	 */

	@Command("keyboard") // method will handled by "/way1" command
	async onWayKeyboard(@Ctx() ctx: TelegrafContext) {
		// first way to send keyboard to user
		const keyboardButtons: any[] = [];

		keyboardButtons.push(
			// here we use "webApp" type of button for open web app  
			Markup.button.webApp('🎥Random movie keyboard', this.webAppUrl),
		);

		const keyboard = Markup.keyboard(keyboardButtons, {
			columns: 1,
		}).resize().reply_markup;

		// send text and keyboard to user 
		await ctx.reply('keyboard call', { reply_markup: keyboard })
		return;
	}

	/**
	 * -------------------
	 * METHOD 2 FOR OPEN TELEGRAM WEB MINI APP
	 * -------------------
	 * by inline buttons
	 */

	@Command("inline") // same logic as "@Start()"" decorator, will also handle the command
	async onWayInlineButton(@Ctx() ctx: TelegrafContext) {
		// first way to send keyboard to user
		const keyboardButtons: any[] = [];

		keyboardButtons.push(
			// here we use "webApp" type of button for open web app  
			Markup.button.webApp('🎥Random movie inline', this.webAppUrl),
		);

		const keyboard = Markup.inlineKeyboard(keyboardButtons, {
			columns: 1,
		}).reply_markup;

		// send text and keyboard to user 
		await ctx.reply('inline keyboard call', { reply_markup: keyboard });
		return;
	}

	/**
	 * Handle "menu" action
	 */
	@Action('menu')
	async onMenu(@Ctx() ctx: TelegrafContext) {
		await ctx.reply('just example of calling action - menu');
		return;
	}

	/**
	 * Handle "/start" command
	 */
	@Command('/display')
	async onDisplay(@Ctx() ctx: TelegrafContext) {
		await ctx.reply('just example of calling command - display');
		return;
	}

	/**
	 * Example of using Action decorator with regexp
	 * Handle actions by regular expression check
	 * "Actions" it's button callback text
	 * It's second argument of Markup.button.callback('ButtonText', 'ActionName') method
	 */
	@Action(/^yourSecondAppMayBe.*/gim)
	async enterBanditScene(@Ctx() ctx: TelegrafContext) {
		const match = ctx.match[0];

		// second way to send keyboard to user
		await ctx.replyWithHTML(
			`Match message by <b>${match || 'No match'}</b>.`,
			Markup.inlineKeyboard(
				[
					Markup.button.callback('📍Computer', 'Computer'),
					Markup.button.callback('📟Computer', 'Computer'),
				],
			),
		)
		return;
	}

}