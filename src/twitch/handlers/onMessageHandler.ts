import { ChatUserstate } from "tmi.js";
import { container } from 'tsyringe';

import CommandHandler from "../../commands";
import BotService from '../../services/botService';

const botService = container.resolve<BotService>('BotService');

// Called every time a message comes in
function onMessageHandler (target: string, context: ChatUserstate, message: string, self: boolean): void {
  if (self) return; // Ignore messages from the bot
  message = message.toLowerCase();

  botService.setAttributes({
    target,
    context
  });
  
  const commandHandler = container.resolve(CommandHandler);
  commandHandler.execute(message);
}

export default onMessageHandler;